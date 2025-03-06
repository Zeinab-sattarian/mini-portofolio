import { useState } from "react";

const useActiveItem = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);

  const handleActiveItem = (itemIndex: number) => {
    setActiveItemIndex(itemIndex);
  };

  return { activeItemIndex, handleActiveItem };
};

export default useActiveItem;
