export const formatTStoSnippetString = (input: string) => {
  const str = input
    .split('\n')
    .map((t) => '"' + t + '",')
    .join('\n');
  return str.slice(0, str.length - 1);
};
