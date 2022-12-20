import { useContext, useState } from "react";
import { View } from "react-native";
import LogContext from "../../context/LogContext";
import FloatingWriteButton from "../../components/common/FloatingWriteButton";
import FeedList from "../../components/layout/Feeds/FeedList";

export default function FeedsScreen() {
  const { logs } = useContext(LogContext);
  const [hidden, setHidden] = useState(false);

  const onScrolledToBottom = (isBottom) => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  )
}