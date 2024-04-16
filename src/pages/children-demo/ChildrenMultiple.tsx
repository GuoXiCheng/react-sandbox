function Page({
  header,
  content,
  footer,
}: {
  header: JSX.Element;
  content: JSX.Element;
  footer: JSX.Element;
}) {
  return (
    <div>
      {header}
      {content}
      {footer}
    </div>
  );
}

export default function ChildrenMultiple() {
  return (
    <Page
      header={<h1>页头</h1>}
      content={<div>页面内容</div>}
      footer={<h1>页尾</h1>}
    ></Page>
  );
}
