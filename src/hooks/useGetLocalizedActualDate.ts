import { LANGUAGE_CODE } from "../constants/languageCode";
import { getActualDate } from "../utils/getActualDate";

type UseGetLocalizedActualDateParams = {
  languageCode: LANGUAGE_CODE;
};

export const useGetLocalizedActualDate = ({ languageCode }: UseGetLocalizedActualDateParams) => {
  const actualDate = getActualDate();

  return new Intl.DateTimeFormat(languageCode).format(actualDate);
};
