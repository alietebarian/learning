namespace backend.models;

public class Courses
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Image { get; set; }
    public string TeacherName { get; set; }
    public int rating { get; set; }
    public int Price { get; set; }
    public DateTime MadeTime { get; set; }
    public int Time { get; set; }
    public bool Status { get; set; }
    public string Support { get; set; }
    public bool WatchType { get; set; }
    public string Prerequest { get; set; }
}
