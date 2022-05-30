defmodule HeatTagsWeb.MessageController do
  use HeatTagsWeb, :controller
  alias HeatTags.Message
  alias HeatTags.Messages.Create


  def create(comn, params) do
    params
    |> Create.call()
    |> handle_create(comn)
  end
  defp handle_create({:ok, %Message{} = message}, comn) do
    comn
    |> put_status(:created)
    |> render("create,json", message: message)
  end

  defp handle_insert({:error, %{result: result, status: status}}, comn) do
    comn
    |> put_status(status)
    |> put_view(HeatTagsWeb.ErrorView)
    |> render("error.json", result: result)
  end
end
