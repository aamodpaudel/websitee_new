import axios from "axios";
import { api } from "./api";
import { AI_REMOTE_URL, getApiEndpoint } from "./urls";

export type DomainType = "community" | "ai";
export const getAppConfigGroup = () => {
  return api.get(getApiEndpoint("appConfigGroup"));
};

export const getFeaturedGroups = ({
  group_type,
  domain_type,
  search = "",
}: {
  group_type: string;
  domain_type?: DomainType;
  search?: string;
}) => {
  if (domain_type === "ai") {
    return axios.get(`${AI_REMOTE_URL}/${getApiEndpoint("featuredGroups")}`, {
      params: { group_type, search },
    });
  }
  return api.get(getApiEndpoint("featuredGroups"), {
    params: { group_type, search },
  });
};

export const getFeaturedResources = ({ search }: { search?: string }) => {
  return api.get(getApiEndpoint("featuredResources"), {
    params: { search },
  });
};

export const getFeaturedJobs = ({ search }: { search?: string }) => {
  return api.get(getApiEndpoint("featuredJobs"), {
    params: { search },
  });
};
