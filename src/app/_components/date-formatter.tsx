import { parseISO, format } from "date-fns";
import { IsoDateTimeString } from "contentlayer/core";

type Props = {
  dateString: IsoDateTimeString;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return <time className="transition-colors group-hover:text-fg-hover-color" dateTime={dateString}>{format(date, "yyyy-MM-dd")}</time>;
};

export default DateFormatter;
