import { Card, CardBody } from "@nextui-org/card";

export default function Panel({ title, className, children, ...props }) {
  return (
    <>
      <Card
        shadow="none"
        className={`${className} border`}
        classNames={{
          body: " bg-transparent shadow-transparent	",
        }}
        {...props}
      >
        <CardBody className="p-7">
          <div>
            <h1 className="font-semibold inline-block half-border">{title}</h1>
          </div>
          <div>{children}</div>
        </CardBody>
      </Card>
    </>
  );
}
