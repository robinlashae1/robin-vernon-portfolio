
function Blog() {

    function renderBlogs(array){
        return(
            array.map(blog => 
                <a href={blog.link} id="blog-link">
                   <div style={{margin: "auto"}}id="blog-container" className="writing">
                       <img src={blog.img} alt="" id="blogImg"/>
                       <div className="blogTitle">
                          <h3 
                    >{blog.title}</h3>
                    {/* <p>{blog.preview}</p> */} 
                       </div>
                    
                </div> 
                </a>
                
            )
        )
    }

    return ( 
        <div className="overall-container ">
            <h1 style={{padding: "4px 0px 2%", margin: "auto"}}>My Writings</h1>
            <div className="wrap">
                {renderBlogs(Blogs)}
            </div>
            
        </div>
    );
}

export default Blog;

const Blogs=[
    {title: "React: Componenets",
    preview: "When first learning React, a key concept you'll encounter are components. These are essentially building blocks for your app. They help to make your code “dry”, dynamic and are an essential ...",
    link: "https://dev.to/robinlashae1/react-components-e2g",
    img: "https://gmeneguz.gallerycdn.vsassets.io/extensions/gmeneguz/styled-component-generator/0.0.3/1616711149829/Microsoft.VisualStudio.Services.Icons.Default",
    imgAlt: "blue code fragment"},
    {title: "A Basic guide to Active Record Commands",
    preview: "When transitioning to Ruby's active record, the commands can be a little long winded and tedious. Here i have provided a c...",
    link: "https://dev.to/robinlashae1/a-basic-guide-to-active-record-commands-doh",
    img: "https://www.adamnengland.com/wp-content/uploads/2014/08/activerecord.png",
    imgAlt: "blue book with white title that reads Active Record"},
    {title: "Renaming a Rails app",
    preview: "Have you ever began a project without having a solid name picked out? I'm sure all of us have at least once. This is completely ok, we shouldn't just let inspiration fade because we can't...",
    link: "https://dev.to/robinlashae1/renaming-a-rails-app-3fg0",
    img: "https://icon-library.com/images/rename-icon/rename-icon-23.jpg",
    imgAlt: "Yellow icon with letters Re"},
    {title: "Instance Vs. Class",
    preview: "On introduction, the idea of instances and classes can seem overwhelming. However, they are actually quite simple concepts to understand over time. Let’s take a step back, and look at ...",
    link: "https://dev.to/robinlashae1/instance-vs-class-1lp9",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Car_icon_alone.png",
    imgAlt: "Black car outline"},
    {title: "Let’s talk Relations",
    preview: "When getting started on a Ruby or Rails app, you may find that you have many tables that correlate. For example, let’s say we are making an app for a football team...",
    link: "https://dev.to/robinlashae1/lets-talk-relations-427c",
    img: "https://cdn2.iconfinder.com/data/icons/computer-hardware-pack/128/ENTITY-RELATIONSHIP-DIAGRAM-512.png",
    imgAlt: "Blue erd icon with 3 charts and relational lines"}
    // ,
    // {title: "",
    // preview: "",
    // link: ""}
]