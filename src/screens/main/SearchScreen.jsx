import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import FeedList from "../../components/layout/Feeds/FeedList";
import LogContext from "../../context/LogContext";
import SearchContext from "../../context/SearchContext";

const messages = {
  NOT_FOUND: "검색 결과가 없습니다.",
  EMPTY_KEYWORD: "검색어를 입력하세요.",
};

const EmptySearchResult = ({ type }) => {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>{messages[type]}</Text>
    </View>
  )
};

export default function SearchScreen() {
  const { keyword } = useContext(SearchContext);
  const { logs } = useContext(LogContext);

  const filtered = 
    keyword === "" 
    ? [] 
    : logs.filter((log) => [log.title, log.body].some((text) => text.includes(keyword)));

  if (keyword === "") {
    return <EmptySearchResult type="EMPTY_KEYWORD" />;
  }

  if (filtered.length === 0) {
    return <EmptySearchResult type="NOT_FOUND" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <FeedList logs={filtered} />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#9e9e9e",
    fontSize: 16,
  },
});
