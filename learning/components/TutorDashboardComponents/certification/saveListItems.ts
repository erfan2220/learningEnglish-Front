import { api } from "@/lib/APIs/axiosInstance";

export const saveListItems = async <T extends { id?: number }>(
  items: T[],
  createUrl: string,
  updateUrl: (id: number) => string,
  mapPayload: (item: T, isCreate: boolean) => FormData
) => {
  for (const item of items) {
    const isCreate = !item.id;
    const formData = mapPayload(item, isCreate);

    if (isCreate) {
      await api.post(createUrl, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } else {
      await api.patch(updateUrl(item.id!), formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    }
  }
};
