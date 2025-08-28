import { api } from "./api";
import { getApiEndpoint } from "./urls";
export type ContactDataType = {
  name: string;
  email: string;
  message: string;
};

export const submitContactForm = (postData: ContactDataType) => {
  return api.post(getApiEndpoint("contact"), postData);
};

export type NewsletterDataType = {
  email: string;
};

export const subscribeToNewsletter = (postData: NewsletterDataType) => {
  return api.post(getApiEndpoint("newsletter"), postData);
};

export type RequestCircleDataType = {
  email: string;
  name: string;
  role: string;
  urgency: string;
  goal: string;
  real_world_problems_to_solve: string;
  ai_usage: string;
  ai_hours: string;
  learning_modality: string;

};

export const requestCircle = (postData: RequestCircleDataType) => {
  return api.post(getApiEndpoint("requestCircle"), postData);
};