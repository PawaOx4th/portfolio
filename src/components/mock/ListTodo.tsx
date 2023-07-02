import { useQuery } from "@tanstack/react-query"
import React from "react"
import ReactQueryProvider from "../../provider/ReactQuery"
import useSWR from "swr"

const onFetchTodos = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (res) => res.json()
  )
}

type Props = {}

function ListTodo({}: Props) {
  const { data, isLoading } = useSWR("/todo", onFetchTodos)
  console.log("🌹 DATA :", data)
  return (
    <>
      <>
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <pre>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        )}
      </>
    </>
  )
}

export default ListTodo
