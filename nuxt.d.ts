type Profile = {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
};
type Result = {
  data: {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
    email: string;
  };
};
type Page = {
  data: Profile[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};

type GetProfiles = {
  res: globalThis.Ref<{
    profiles: Profile[];
    pages: number;
  } | null>;
  page: {
    value: number;
  };
  next: () => void;
  previous: () => void;
  error: globalThis.Ref<Error | null>;
  pending: globalThis.Ref<any>;
};
