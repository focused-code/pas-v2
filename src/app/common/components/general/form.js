import { Form } from 'mobx-react-form';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';
import {
  login,
  register,
  registerSingleUser,
  resetPassword,
  newCompany,
  editCompany,
  newAssessment,
  editAssessment,
  newMeetingNote,
  emailMeetingNote,
  editMeetingNote,
  editProfile,
  editUser,
  addUserModuleSet,
  sendResetPasswordEmail,
  saveQuestionsResponses,
  saveSplitQuestionsResponses,
  saveSuccessResponses,
  savePricesExtraResponses,
  freeRegister,
  newGroup,
  editGroup,
  newMember,
  editMember,
  editlessonMeetingSettings,
  saveActiveCampaignCreds,
} from './form-actions';

export default class GForm extends Form {
  plugins() {
    return {
      dvr: dvr({
        package: validatorjs,
        extend: ({ validator }) => {
          const messages = validator.getMessages('en');
          messages.required = 'Whoops, this field is required.';
          messages.integer = 'Whoops, this field must be a number.';
          messages.digits = 'Whoops, this field must be a number and an exact length of :value.';
          messages.digits_between = 'Whoops, this field must be a number between :min and :max.';
          messages.required_if = 'Whoops, this field is required when :other is :value.';
          validator.setMessages('en', messages);
        },
      }),
    };
  }

  options() {
    return {
      validateOnChange: true,
    };
  }

  hooks() {
    return {
      onSuccess(form) {
        switch (form.name) {
          case 'login-form':
            login(form);
            break;

          case 'reset-password-form-two':
            resetPassword(form);
            break;

          case 'register-form':
            register(form);
            break;

          case 'free-register-form':
            freeRegister(form);
            break;

          case 'profile-form':
            editProfile(form);
            break;

          case 'single-user-form':
            registerSingleUser(form);
            break;

          case 'company-form':
            newCompany(form);
            break;

          case 'edit-user-form':
            editUser(form);
            break;

          case 'edit-company-form':
            editCompany(form);
            break;

          case 'assessment-form':
            newAssessment(form);
            break;

          case 'edit-assessment-form':
            editAssessment(form);
            break;

          case 'meeting-form':
            newMeetingNote(form);
            break;

          case 'edit-meeting-form':
            editMeetingNote(form);
            break;

          case 'email-meeting-note-form':
            emailMeetingNote(form);
            break;

          case 'prices-extra-form':
            savePricesExtraResponses(form);
            break;

          case 'module-sets-form':
            addUserModuleSet(form);
            break;

          case 'reset-password-form':
            sendResetPasswordEmail(form);
            break;

          case 'questions-form':
            saveQuestionsResponses(form);
            break;

          case 'split-questions-form':
            saveSplitQuestionsResponses(form);
            form.nextStep();
            break;

          case 'success-form':
            saveSuccessResponses(form);
            break;

          case 'group-wizard-form':
            newGroup(form);
            break;

          case 'edit-group-form':
            editGroup(form);
            break;

          case 'new-member-form':
            newMember(form);
            break;

          case 'edit-member-form':
            editMember(form);
            break;

          case 'lesson-meeting-settings-form':
            editlessonMeetingSettings(form);
            break;

          case 'coach-lesson-settings-form':
            editlessonSettings(form);
            break;

          case 'active-campaign-form':
            saveActiveCampaignCreds(form);
            break;

          default:
            return null;
        }
      },

      onError(form) {
        // get all form errors
        console.log('form.errors', form.errors());
      },

    };
  }
}
