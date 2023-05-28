import React, { useState } from "react"
import ListTable, { IColumn } from "./ListingTable"

interface IPost {
  id: number
  title: string
  description: string | null
  hits: number | null
  [key: string]: any
}

const Listing: React.FC<any> = () => {
  const [checkedArr, setCheckedArr] = useState<number[]>([])

  const rows: IPost[] = [
    {
      id: 1,
      title: "The Art of War",
      description: "A classic treatise on military strategy written by Sun Tzu",
      hits: 1000,
    },
    {
      id: 2,
      title: "The Hitchhiker's Guide to the Galaxy",
      description: "A comedic science fiction series written by Douglas Adams",
      hits: 500,
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      description:
        "A novel by Harper Lee that addresses issues of racism and injustice",
      hits: 1200,
    },
    {
      id: 4,
      title: "The Great Gatsby",
      description:
        "A novel by F. Scott Fitzgerald that explores the decadence and excess of the Roaring Twenties",
      hits: 800,
    },
    {
      id: 5,
      title: "The Lord of the Rings",
      description: "An epic high fantasy novel by J.R.R. Tolkien",
      hits: 1500,
    },
    {
      id: 6,
      title: "1984",
      description:
        "A dystopian novel by George Orwell that examines the dangers of totalitarianism",
      hits: 900,
    },
    {
      id: 7,
      title: "Pride and Prejudice",
      description:
        "A romantic novel by Jane Austen that satirizes the social norms of 19th-century England",
      hits: 700,
    },
    {
      id: 8,
      title: "The Catcher in the Rye",
      description:
        "A coming-of-age novel by J.D. Salinger that explores themes of alienation and teenage angst",
      hits: 600,
    },
    {
      id: 9,
      title: "The Picture of Dorian Gray",
      description:
        "A novel by Oscar Wilde that explores the themes of beauty, morality, and corruption",
      hits: 400,
    },
    {
      id: 10,
      title: "One Hundred Years of Solitude",
      description:
        "A novel by Gabriel Garcia Marquez that chronicles the history of the fictional town of Macondo",
      hits: 1100,
    },
  ]

  const columns: IColumn[] = [
    {
      field: "checkbox",
      headerName: "checkbox",
      type: "checkbox",
      style: { width: 42 },
    }, // checkbox width is fixed 45px
    { field: "id", headerName: "ID", style: { width: 42, align: "center" } },
    {
      field: "title",
      headerName: "제목",
      type: "link",
      style: { width: 3 / 10 },
    },
    { field: "description", headerName: "설명", style: { width: 6 / 10 } },
    {
      field: "hits",
      headerName: "조회수",
      type: "number",
      style: { width: 1 / 10 },
    },
  ]

  return (
    <div style={{ height: 500, width: "100%" }}>
      <ListTable
        columns={columns}
        rows={rows as any}
        watchChecked={(val) => setCheckedArr(val)}
      />
    </div>
  )
}

export default Listing
