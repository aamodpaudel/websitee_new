import { AI_URL, COMMUNITY_URL } from "@/consts";

export const REMOTE_URL = process.env.NEXT_PUBLIC_REMOTE_URL || COMMUNITY_URL;

export const AI_REMOTE_URL = process.env.NEXT_PUBLIC_AI_REMOTE_URL || AI_URL;

const apiEndpoints = {
  contact: "api/v1/contact-us/",
  appConfigGroup: "api/v1/app-config-group/",
  featuredGroups: "api/v1/groups/featured/",
  featuredResources: "api/v1/all-career-tips/featured/",
  featuredJobs: "api/v1/jobs/featured/",
  newsletter: "api/v1/newsletter/",
  requestCircle: "api/v1/request-circle/",
};

export type EndpointsType = keyof typeof apiEndpoints;
export function getRemoteUrl(): string {
  return REMOTE_URL;
}
export function getApiEndpoint(endpoint: EndpointsType) {
  return apiEndpoints[endpoint];
}
