import React from "react";
import { Card, Skeleton } from "@nextui-org/react";
type Props = {};

const CardSkeleton = (props: Props) => {
  return (
    <Card className="space-y-5 p-4">
      <Skeleton className="rounded-full">
        <div className="w-36 h-36 bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>
    </Card>
  );
};

export default CardSkeleton;
