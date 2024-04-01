import CSSModuleDemo from "./CSSModuleDemo";
import ExternalStyleA from "./ExternalStyleA";
import ExternalStyleB from "./ExternalStyleB";
import ExternalStyleC from "./ExternalStyleC";
import InlineStyleA from "./InlineStyleA";
import InlineStyleB from "./InlineStyleB";
import StyledBasic from "./StyledBasic";
import StyledCondition from "./StyledCondition";
import StyledExtend from "./StyledExtend";
import StyledPsendo from "./StyledPseudo";

export default function StylesDemo() {
  return (
    <>
        <InlineStyleA />
        <InlineStyleB />
        <ExternalStyleA />
        <ExternalStyleB selected={false}/>
        <ExternalStyleC selected={true}/>
        <CSSModuleDemo />
        <StyledBasic />
        <StyledCondition primary={false}/>
        <StyledExtend />
        <StyledPsendo />
    </>
  );
}