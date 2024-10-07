export interface ITour {
  id: number;
  content: string;
  title: string;
  slug: string;
  highlights: TourHighlight[];
  whatToExpect: WhatToExpectItem[];
  imageFolder: string;
}
interface TourHighlight {
  title: string;
  description: string;
}

interface WhatToExpectItem {
  title: string;
  description: string;
}
