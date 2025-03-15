import {QueryClient} from "@tanstack/react-query";

// 아래와 같은 형식으로 연속적으로 작성
export const queryKeys = {
  examples: {
    exam1: 'example1',
    exam2: 'example2',
  },
  samples: {
    sample1: 'sample-a',
    sample2: 'sample-b',
  }
};

export const queryClient = new QueryClient();