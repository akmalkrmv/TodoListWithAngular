namespace TodoListApp.Web.Models
{
    /// <summary>
    /// Todo item entity
    /// </summary>
    public class TodoItem
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public bool Done { get; set; }
    }
}