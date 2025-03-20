import './recentposts.css';
import BlogCard from './components/blogcard';

export default function Page() {
    const blogs = [
        {
            'id': 1,
            'title': 'Mastering the FRQs on the AP Computer Science Exam',
            'date': '03 Mar, 2025',
            'image': 'blog1.jpg',
            'href': './blog/01',
        },
        {
            'id': 2,
            'title': 'Prep for the Exam Day',
            'date': '03 Mar, 2025',
            'image': 'blog3.jpg',
            'href': './blog/02',
        },
        {
            'id': 3,
            'title': 'Java classes for AP CSA',
            'date': '03 Mar, 2025',
            'image': 'blog2.jpg',
            'href': './blog/03',
        },
        {
            'id': 4,
            'title': 'AP CSA Tutoring Benefits',
            'date': '04 Mar, 2025',
            'image': 'blog4.jpg',
            'href': './blog/04',
        },
        {
            'id': 5,
            'title': 'Must Know Java Concepts',
            'date': '05 Mar, 2025',
            'image': 'blog5.jpg',
            'href': './blog/05',
        },
        {
            'id': 6,
            'title': 'Why AP CSA?',
            'date': '07 Mar, 2025',
            'image': 'blog6.jpg',
            'href': './blog/06',
        },
        {
            'id': 7,
            'title': 'A Day in the Life of a Software Engineer',
            'date': '07 Mar, 2025',
            'image': 'blog7.jpg',
            'href': './blog/07',
        },
        {
            'id': 8,
            'title': 'How to Debug Java Like a Pro',
            'date': '08 Mar, 2025',
            'image': 'blog8.jpg',
            'href': './blog/08',
        },
        {
            'id': 9,
            'title': 'How to Stay Motivated While Learning Java',
            'date': '15 Mar, 2025',
            'image': 'blog9.jpg',
            'href': './blog/09',
        }
    ];
    return(
        <section id='blog-1347'>
            <div className="cs-container">
                <div className="cs-content">
                    <span className="cs-topper">Our Blog</span>
                    <h2 className="cs-title">Explore our articles about computer science</h2>
                    <p className="cs-text">

                    </p>
                </div>

                <ul className="cs-card-group">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} title={blog.title} date={blog.date} image={blog.image} href={blog.href} />
                    ))}
                </ul>
            </div>
        </section>
    );
}