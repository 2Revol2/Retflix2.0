import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { HStack } from "@/shared/ui/Stack";
import { classNames } from "@/shared/lib/classNames/classNames";

interface MessageInputProps {
  className?: string;
}

export const MessageInput = (props: MessageInputProps) => {
  const { className } = props;
  return (
    <HStack max gap={"4"} className={classNames("", {}, [className])}>
      <Input />
      <Button variant={"outline"}>Send</Button>
    </HStack>
  );
};
