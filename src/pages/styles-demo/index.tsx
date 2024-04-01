import ExternalStyleA from "./ExternalStyleA";
import ExternalStyleB from "./ExternalStyleB";
import ExternalStyleC from "./ExternalStyleC";
import InlineStyleA from "./InlineStyleA";
import InlineStyleB from "./InlineStyleB";

export default function StylesDemo() {
  return (
    <>
        <InlineStyleA />
        <InlineStyleB />
        <ExternalStyleA />
        <ExternalStyleB selected={false}/>
        <ExternalStyleC selected={true}/>
    </>
  );
}