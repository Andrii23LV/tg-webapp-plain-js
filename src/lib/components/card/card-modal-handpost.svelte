<script>
	import * as Dialog from '$lib/components/ui/dialog';
	import Button from '$lib/shared/button.svelte';
	import Envelope from '$lib/shared/assets/envelope.svelte';

	import ModalContactDropdown from '$lib/components/card/modal-contact-dropdown.svelte';
	import ModalAddContactForm from '$lib/components/card/modal-add-contact-form.svelte';
	import ModalExistingContacts from '$lib/components/card/modal-existing-contacts.svelte';
	import ModalFormJobImageUploder from '$lib/components/card/modal-form-job-image-uploader.svelte';
	import ModalFormJobTextarea from '$lib/components/card/modal-form-job-textarea.svelte';

	import { convertUserInputPhone } from '$lib/utils/convertUserInputPhone';

	export let onFormDataChange;
	export let channel;
	export let onHandPost;

	let imageLink;
	let image;
	let text;
	let contacts = [];
	let selectedContact;
	let contactValue;

	const handleImageChange = (event) => {
		const file = event?.target?.files[0];

		if (file) {
			if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
				const reader = new FileReader();

				reader.onloadend = () => {
					imageLink = reader.result;
				};
				reader.readAsDataURL(file);

				image = file;

				onFormDataChange({
					text,
					image,
					contacts
				});
			} else {
				alert('Please upload a valid image file (JPEG, JPG, or PNG)');
			}
		}
	};

	const handleTextChange = (event) => {
		const newText = event.target.value;
		text = newText;
		onFormDataChange({
			text: newText,
			image,
			contacts
		});
	};

	const handleContactChange = (event) => {
		selectedContact = event.target.value;
		contactValue = '';
	};

	const handleAddContact = () => {
		if (selectedContact && contactValue) {
			contacts = [
				...contacts,
				{
					name: selectedContact,
					value: selectedContact === 'phone' ? convertUserInputPhone(contactValue) : contactValue
				}
			];
			selectedContact = '';
			contactValue = '';

			onFormDataChange({
				text,
				image,
				contacts
			});
		}
	};

	const handleContactValueChange = (event) => {
		contactValue = event.target.value;
	};

	const handleDeleteContact = (index) => {
		const updatedContacts = [...contacts];
		updatedContacts.splice(index, 1);
		contacts = updatedContacts;
		onFormDataChange({ text, image, contacts });
	};
</script>

<Dialog.Root>
	<Dialog.Trigger>
		{#if channel.bot && onHandPost && onHandPost !== undefined}
			<Button
				disabled={channel.autopost}
				style="submit"
				type="button"
				handler={() => onHandPost && onHandPost(channel.id, 'handpost')}
			>
				<Envelope />
			</Button>
		{/if}
	</Dialog.Trigger>
	<Dialog.Content class="gap-1 sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title class="mb-4">Додати новий канал</Dialog.Title>
		</Dialog.Header>
		<p class="mb-2 block text-sm">Контакти:</p>
		<div class="mb-2 flex flex-wrap items-center gap-1">
			<ModalContactDropdown {handleContactChange} {selectedContact} />
			<p class="text-center text-xs text-zinc-300">Можна обрати декілька видів звʼязку.</p>
			{#if selectedContact}
				<ModalAddContactForm
					{handleAddContact}
					{handleContactValueChange}
					{selectedContact}
					{contactValue}
				/>
			{/if}
		</div>
		<ModalExistingContacts {contacts} {handleDeleteContact} />
		<ModalFormJobImageUploder {handleImageChange} />
		{#if imageLink}
			<div class="mb-4 flex max-w-[200px] justify-center">
				<img src={imageLink} alt="Preview" class="max-h-200px max-w-full" />
			</div>
		{/if}
		<ModalFormJobTextarea {text} {handleTextChange} />
		<Dialog.Footer class="m-auto mt-2 flex">
			<Button type="submit" style="submit">Підвердити</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
