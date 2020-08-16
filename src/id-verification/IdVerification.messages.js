import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'id.verification.next': {
    id: 'id.verification.next',
    defaultMessage: 'Next',
    description: 'Next button.',
  },
  'id.verification.requirements.title': {
    id: 'id.verification.requirements.title',
    defaultMessage: 'Photo Verification Requirements',
    description: 'Title for the Photo Verification Requirements page.',
  },
  'id.verification.requirements.description': {
    id: 'id.verification.requirements.description',
    defaultMessage: 'In order to complete Photo Verification online, you will need the following:',
    description: 'Description for the Photo Verification Requirements page.',
  },
  'id.verification.requirements.card.device.title': {
    id: 'id.verification.requirements.card.device.title',
    defaultMessage: 'Device with Camera',
    description: 'Title for the Device with Camera card.',
  },
  'id.verification.requirements.card.device.allow': {
    id: 'id.verification.requirements.card.device.allow',
    defaultMessage: 'Allow',
    description: 'Bold text emphasizing that the user needs to click "allow" in order to enable the camera.',
  },
  'id.verification.requirements.card.id.title': {
    id: 'id.verification.requirements.card.id.title',
    defaultMessage: 'Photo Identification',
    description: 'Title for the Photo Identification requirement card.',
  },
  'id.verification.requirements.card.id.text': {
    id: 'id.verification.requirements.card.id.text',
    defaultMessage: 'You need a valid ID that contains your full name and photo.',
    description: 'Text that explains that the user needs a photo ID.',
  },
  'id.verification.privacy.title': {
    id: 'id.verification.privacy.title',
    defaultMessage: 'Privacy Information',
    description: 'Title for Privacy Information.',
  },
  'id.verification.privacy.need.photo.question': {
    id: 'id.verification.privacy.need.photo.question',
    defaultMessage: 'Why does edX need my photo?',
    description: 'Question about why edX needs a verification photo.',
  },
  'id.verification.privacy.need.photo.answer': {
    id: 'id.verification.privacy.need.photo.answer',
    defaultMessage: 'We use your verification photos to confirm your identity and ensure the validity of your certificate.',
    description: 'Answering why edX needs a verification photo.',
  },
  'id.verification.privacy.do.with.photo.question': {
    id: 'id.verification.privacy.do.with.photo.question',
    defaultMessage: 'What does edX do with this photo?',
    description: 'Question about what edX does with the verification photo.',
  },
  'id.verification.privacy.do.with.photo.answer': {
    id: 'id.verification.privacy.do.with.photo.answer',
    defaultMessage: 'We securely encrypt your photo and send it our authorization service for review. Your photo and information are not saved or visible anywhere on edX after the verification process is complete.',
    description: 'Answering what edX does with the verification photo.',
  },
  'id.verification.existing.request.title': {
    id: 'id.verification.existing.request.title',
    defaultMessage: 'Identity Verification',
    description: 'Title for text that displays when user has already made a request.',
  },
  'id.verification.existing.request.pending.text': {
    id: 'id.verification.existing.request.pending.text',
    defaultMessage: 'You have already submitted your verification information. You will see a message on your dashboard when the verification process is complete (usually within 5 days).',
    description: 'Text that displays when user has a pending or approved request.',
  },
  'id.verification.photo.take': {
    id: 'id.verification.photo.take',
    defaultMessage: 'Take Photo',
    description: 'Button to take photo.',
  },
  'id.verification.photo.retake': {
    id: 'id.verification.photo.retake',
    defaultMessage: 'Retake Photo',
    description: 'Button to retake photo.',
  },
  'id.verification.camera.access.title': {
    id: 'id.verification.camera.access.title',
    defaultMessage: 'Camera Permissions',
    description: 'Title for the Camera Access page.',
  },
  'id.verification.camera.access.title.success': {
    id: 'id.verification.camera.access.title.success',
    defaultMessage: 'Camera Access Enabled',
    description: 'Title for the Camera Access page when camera is enabled.',
  },
  'id.verification.camera.access.title.failed': {
    id: 'id.verification.camera.access.title.failed',
    defaultMessage: 'Camera Access Failed',
    description: 'Title for the Camera Access page when camera access is denied or unavailable.',
  },
  'id.verification.camera.access.click.allow': {
    id: 'id.verification.camera.access.click.allow',
    defaultMessage: 'Please make sure to click "Allow"',
    description: 'Instruction to allow camera access.',
  },
  'id.verification.camera.access.enable': {
    id: 'id.verification.camera.access.enable',
    defaultMessage: 'Enable Camera',
    description: 'Text to enable camera.',
  },
  'id.verification.camera.access.problems': {
    id: 'id.verification.camera.access.problems',
    defaultMessage: 'Having problems?',
    description: 'Text for when the user is having problems enabling camera access.',
  },
  'id.verification.camera.access.skip': {
    id: 'id.verification.camera.access.skip',
    defaultMessage: 'Skip and upload image files instead',
    description: 'Text to skip camera access and enable image uploading.',
  },
  'id.verification.camera.access.success': {
    id: 'id.verification.camera.access.success',
    defaultMessage: 'Looks like your camera is working and ready.',
    description: 'Text to confirm that camera is working.',
  },
  'id.verification.camera.access.failure': {
    id: 'id.verification.camera.access.failure',
    defaultMessage: 'It looks like we\'re unable to access your camera. You will need to upload image files of you and your photo id.',
    description: 'Text indicating that the camera could not be accessed and image upload will be enabled.',
  },
  'id.verification.camera.access.failure.temporary': {
    id: 'id.verification.camera.access.failure.temporary',
    defaultMessage: 'It looks like we\'re unable to access your camera. Please verify that your webcam is connected and that you have allowed your browser to access it.',
    description: 'Text indicating that the camera could not be accessed.',
  },
  'id.verification.photo.tips.title': {
    id: 'id.verification.photo.tips.title',
    defaultMessage: 'Helpful Photo Tips',
    description: 'Title for the Photo Tips page.',
  },
  'id.verification.photo.tips.description': {
    id: 'id.verification.photo.tips.description',
    defaultMessage: 'Next, we\'ll need you to take a photo of your face. Please review the helpful tips below.',
    description: 'Description for the photo tips page.',
  },
  'id.verification.photo.tips.list.title': {
    id: 'id.verification.photo.tips.list.title',
    defaultMessage: 'Photo Tips',
    description: 'Title for the list of photo tips.',
  },
  'id.verification.photo.tips.list.description': {
    id: 'id.verification.photo.tips.list.description',
    defaultMessage: 'To take a successful photo, make sure that:',
    description: 'Description for the list of photo tips.',
  },
  'id.verification.photo.tips.list.well.lit': {
    id: 'id.verification.photo.tips.list.well.lit',
    defaultMessage: 'Your face is well-lit.',
    description: 'Tip to make sure the user\'s face is well lit.',
  },
  'id.verification.photo.tips.list.inside.frame': {
    id: 'id.verification.photo.tips.list.inside.frame',
    defaultMessage: 'Your entire face fits inside the frame.',
    description: 'Tip to make sure the user\'s face fits inside the frame.',
  },
  'id.verification.portrait.photo.title.camera': {
    id: 'id.verification.portrait.photo.title.camera',
    defaultMessage: 'Take a Photo of Yourself',
    description: 'Title for the Portrait Photo page if camera access is enabled.',
  },
  'id.verification.portrait.photo.title.upload': {
    id: 'id.verification.portrait.photo.title.upload',
    defaultMessage: 'Upload a Photo of Yourself',
    description: 'Title for the Portrait Photo page if camera access is disabled.',
  },
  'id.verification.portrait.photo.preview.alt': {
    id: 'id.verification.portrait.photo.preview.alt',
    defaultMessage: 'Preview of photo of user\'s face.',
    description: 'Alt text for the portrait photo preview.',
  },
  'id.verification.portrait.photo.instructions.camera': {
    id: 'id.verification.portrait.photo.instructions.camera',
    defaultMessage: 'When your face is in position, use the Take Photo button below to take your photo.',
    description: 'Instructions to use the camera to take a portrait photo..',
  },
  'id.verification.portrait.photo.instructions.upload': {
    id: 'id.verification.portrait.photo.instructions.upload',
    defaultMessage: 'Please upload a portrait photo. Ensure your entire face fits inside the frame and is well-lit. (Supported formats: .jpg, .jpeg, .png)',
    description: 'Instructions for portrait photo upload.',
  },
  'id.verification.camera.help.sight.question': {
    id: 'id.verification.camera.help.sight.question',
    defaultMessage: 'What if I can\'t see the camera image or if I can\'t see my photo to determine which side is visible?',
    description: 'Question on what to do if the user cannot see the camera image or photo during verification.',
  },
  'id.verification.camera.help.sight.answer.portrait': {
    id: 'id.verification.camera.help.sight.answer.portrait',
    defaultMessage: 'You may be able to complete the image capture procedure without assistance, but it may take a couple of submission attempts to get the camera positioning right. Optimal camera positioning varies with each computer, but generally the best position for a headshot is approximately 12-18 inches (30-45 centimeters) from the camera, with your head centered relative to the computer screen. If the photos you submit are rejected, try moving the computer or camera orientation to change the lighting angle.',
    description: 'Confirming what to do if the camera image of the portrait cannot be seen during verification.',
  },
  'id.verification.camera.help.sight.answer.id': {
    id: 'id.verification.camera.help.sight.answer.id',
    defaultMessage: 'You may be able to complete the image capture procedure without assistance, but it may take a couple of submission attempts to get the camera positioning right. Optimal camera positioning varies with each computer, but generally, the best position for a photo of an ID card is 8-12 inches (20-30 centimeters) from the camera, with the ID card centered relative to the camera. If the photos you submit are rejected, try moving the computer or camera orientation to change the lighting angle. The most common reason for rejection is inability to read the text on the ID card.',
    description: 'Confirming what to do if the camera image of the ID cannot be seen during verification.',
  },
  'id.verification.camera.help.difficulty.question.portrait': {
    id: 'id.verification.camera.help.difficulty.question.portrait',
    defaultMessage: 'What if I have difficulty holding my head in position relative to the camera?',
    description: 'Question on what to do if the user has difficulty holding their head relative to the camera.',
  },
  'id.verification.camera.help.difficulty.question.id': {
    id: 'id.verification.camera.help.difficulty.question.id',
    defaultMessage: 'What if I have difficulty holding my ID in position relative to the camera?',
    description: 'Question on what to do if the user has difficulty holding their ID relative to the camera.',
  },
  'id.verification.camera.help.difficulty.answer': {
    id: 'id.verification.camera.help.difficulty.answer',
    defaultMessage: 'If you require assistance with taking a photo for submission, contact edX support for additional suggestions.',
    description: 'Confirming what to do if the user has difficult holding their head relative to the camera.',
  },
  'id.verification.id.tips.title': {
    id: 'id.verification.id.tips.title',
    defaultMessage: 'Helpful ID Tips',
    description: 'Title for the ID Tips page.',
  },
  'id.verification.id.tips.description': {
    id: 'id.verification.id.tips.description',
    defaultMessage: 'Next, we\'ll need you to take a photo of a valid ID that includes your name. Please have your ID ready.',
    description: 'Description for the ID Tips page.',
  },
  'id.verification.id.tips.list.well.lit': {
    id: 'id.verification.id.tips.list.well.lit',
    defaultMessage: 'Your ID is well-lit.',
    description: 'Tip to ensure ID is well lit.',
  },
  'id.verification.id.tips.list.clear': {
    id: 'id.verification.id.tips.list.clear',
    defaultMessage: 'Ensure that you can see your photo and clearly read your name.',
    description: 'Tip to ensure ID and name can be seen clearly.',
  },
  'id.verification.id.photo.title.camera': {
    id: 'id.verification.id.photo.title.camera',
    defaultMessage: 'Take a Photo of Your ID',
    description: 'Title for the ID Photo page if camera access is enabled.',
  },
  'id.verification.id.photo.title.upload': {
    id: 'id.verification.id.photo.title.upload',
    defaultMessage: 'Upload a Photo of Your ID',
    description: 'Title for the ID Photo page if camera access is disabled.',
  },
  'id.verification.id.photo.preview.alt': {
    id: 'id.verification.id.photo.preview.alt',
    defaultMessage: 'Preview of photo ID.',
    description: 'Alt text for the ID photo preview.',
  },
  'id.verification.id.photo.instructions.camera': {
    id: 'id.verification.id.photo.instructions.camera',
    defaultMessage: 'When your ID is in position, use the Take Photo button below to take your photo.',
    description: 'Instructions to use the camera to take an ID photo.',
  },
  'id.verification.id.photo.instructions.upload': {
    id: 'id.verification.id.photo.instructions.upload',
    defaultMessage: 'Please upload an ID photo. Ensure the entire ID fits inside the frame and is well-lit. (Supported formats: .jpg, .jpeg, .png)',
    description: 'Instructions for ID photo upload.',
  },
  'id.verification.account.name.title': {
    id: 'id.verification.account.name.title',
    defaultMessage: 'Account Name Check',
    description: 'Title for the Account Name Check page.',
  },
  'id.verification.account.name.instructions': {
    id: 'id.verification.account.name.instructions',
    defaultMessage: 'The name on your account and the name on your ID must be an exact match. If not, please click "No" to update your account name.',
    description: 'Text to verify that the account name matches the name on the ID photo.',
  },
  'id.verification.account.name.radio.label': {
    id: 'id.verification.account.name.radio.label',
    defaultMessage: 'Does the name on your ID match the Account Name below?',
    description: 'Question to ask the user whether their account name match the name on their ID card.',
  },
  'id.verification.account.name.radio.yes': {
    id: 'id.verification.account.name.radio.yes',
    defaultMessage: 'Yes',
    description: 'The radio button that says the account name matches.',
  },
  'id.verification.account.name.radio.no': {
    id: 'id.verification.account.name.radio.no',
    defaultMessage: 'No',
    description: 'The radio button that says the account name does not match.',
  },
  'id.verification.account.name.error': {
    id: 'id.verification.account.name.error',
    defaultMessage: 'Please update account name to match the name on your ID.',
    description: 'Error that shows when the user needs to update their account name to match the name on their ID.',
  },
  'id.verification.account.name.warning.prefix': {
    id: 'id.verification.account.name.warning.prefix',
    defaultMessage: 'Please Note:',
    description: 'Prefix to the warning that any change to the account name will be saved to the account.',
  },
  'id.verification.account.name.settings': {
    id: 'id.verification.account.name.settings',
    defaultMessage: 'Account Settings',
    description: 'Link to Account Settings.',
  },
  'id.verification.account.name.label': {
    id: 'id.verification.account.name.label',
    defaultMessage: 'Account Name',
    description: 'Label for account name input.',
  },
  'id.verification.account.name.photo.alt': {
    id: 'id.verification.account.name.photo.alt',
    defaultMessage: 'Photo of your ID to be submitted.',
    description: 'Alt text for the photo of the user\'s ID.',
  },
  'id.verification.account.name.save': {
    id: 'id.verification.account.name.save',
    defaultMessage: 'Save and Next',
    description: 'Button to save the account name.',
  },
  'id.verification.review.title': {
    id: 'id.verification.review.title',
    defaultMessage: 'Review Your Photos',
    description: 'Title for the review your photos page.',
  },
  'id.verification.review.description': {
    id: 'id.verification.review.description',
    defaultMessage: 'Make sure we can verify your identity with the photos and information you have provided.',
    description: 'Description for the review your photos page.',
  },
  'id.verification.review.portrait.label': {
    id: 'id.verification.review.portrait.label',
    defaultMessage: 'Your Portrait',
    description: 'Label for the portrait card.',
  },
  'id.verification.review.portrait.alt': {
    id: 'id.verification.review.portrait.alt',
    defaultMessage: 'Photo of your face to be submitted.',
    description: 'Alt text for the portrait photo.',
  },
  'id.verification.review.portrait.retake': {
    id: 'id.verification.review.portrait.retake',
    defaultMessage: 'Retake Portrait Photo',
    description: 'Button to retake the portrait photo.',
  },
  'id.verification.review.id.label': {
    id: 'id.verification.review.id.label',
    defaultMessage: 'Your Photo ID',
    description: 'Label for the Photo ID card.',
  },
  'id.verification.review.id.alt': {
    id: 'id.verification.review.id.alt',
    defaultMessage: 'Photo of your ID to be submitted.',
    description: 'Alt text for the ID photo.',
  },
  'id.verification.review.id.retake': {
    id: 'id.verification.review.id.retake',
    defaultMessage: 'Retake ID Photo',
    description: 'Button to retake the ID photo.',
  },
  'id.verification.review.confirm': {
    id: 'id.verification.review.confirm',
    defaultMessage: 'Submit',
    description: 'Button to confirm all information is correct and submit.',
  },
  'id.verification.submitted.title': {
    id: 'id.verification.submitted.title',
    defaultMessage: 'Identity Verification in Progress',
    description: 'Title for the submitted page.',
  },
  'id.verification.submitted.text': {
    id: 'id.verification.submitted.text',
    defaultMessage: 'We have received your information and are verifying your identity. You will see a message on your dashboard when the verification process is complete (usually within 5 days). In the meantime, you can still access all available course content.',
    description: 'Text confirming that ID verification request has been received.',
  },
  'id.verification.return.dashboard': {
    id: 'id.verification.return.dashboard',
    defaultMessage: 'Return to Your Dashboard',
    description: 'Button to return to the dashboard.',
  },
  'id.verification.return.course': {
    id: 'id.verification.return.course',
    defaultMessage: 'Return to Course',
    description: 'Return to the course which ID verification was accessed from.',
  },
});

export default messages;