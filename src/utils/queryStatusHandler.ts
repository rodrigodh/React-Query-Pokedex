export function queryStatusHandler({ status }: { status: string }) {
  switch (status) {
    case "loading":
      return "Carregando...";

    case "error":
      return "Error";

    default:
      return "";
  }
}
