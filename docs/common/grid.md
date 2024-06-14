# Grid布局

## 父级

| Class       | Properties                                        |
| ----------- | ------------------------------------------------- |
| grid-cols-1 | grid-template-columns: repeat(1, minmax(0, 1fr)); |
| grid-cols-2 | grid-template-columns: repeat(2, minmax(0, 1fr)); |
| grid-cols-3 | grid-template-columns: repeat(3, minmax(0, 1fr)); |
| grid-cols-4 | grid-template-columns: repeat(4, minmax(0, 1fr)); |
| grid-cols-5 | grid-template-columns: repeat(5, minmax(0, 1fr)); |

## 子级

| Class      | Properties                    |
| ---------- | ----------------------------- |
| col-auto   | grid-column: auto;            |
| col-span-1 | grid-column: span 1 / span 1; |
| col-span-2 | grid-column: span 2 / span 2; |
| col-span-3 | grid-column: span 3 / span 3; |
| col-span-4 | grid-column: span 4 / span 4; |
| col-span-5 | grid-column: span 5 / span 5; |

![An image](../images/common/grid-1-1.png)

## Gap

| Class     | Properties                    |
| --------- | ----------------------------- |
| gap-0     | gap: 0px;                     |
| gap-x-0   | column-gap: 0px;              |
| gap-y-0   | row-gap: 0px;                 |
| gap-px    | gap: 1px;                     |
| gap-x-px  | column-gap: 1px;              |
| gap-y-px  | row-gap: 1px;                 |
| gap-0.5   | gap: 0.125rem; /*2px*/        |
| gap-x-0.5 | column-gap: 0.125rem; /*2px*/ |
| gap-y-0.5 | row-gap: 0.125rem; /*2px*/    |
| gap-1     | gap: 0.25rem; /*4px*/         |
| gap-x-1   | column-gap: 0.25rem; /*4px*/  |
| gap-y-1   | row-gap: 0.25rem; /*4px*/     |
| gap-1.5   | gap: 0.375rem; /*6px*/        |
| gap-x-1.5 | column-gap: 0.375rem; /*6px*/ |
| gap-y-1.5 | row-gap: 0.375rem; /*6px*/    |
| gap-2     | gap: 0.5rem; /*8px*/          |