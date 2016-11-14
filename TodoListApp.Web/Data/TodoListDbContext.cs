using System.Data.Entity;
using TodoListApp.Web.Models;

namespace TodoListApp.Web.Data
{
    /// <summary>
    /// Standart Entity framework database context for working with TodoList database
    /// </summary>
    public class TodoListDbContext : DbContext
    {
        public TodoListDbContext()
            : base("TodoListConnectionString")
        {
        }

        public virtual DbSet<TodoItem> TodoItems { get; set; }
    }
}