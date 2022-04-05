import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../sanity'

interface Props {
  posts: [Post]
}

function Posts({ posts }: Props) {
  console.log('posts component:', posts)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
      {posts.map((post) => {
        return (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <a className='border rounded-lg overflow-hidden group'>
              <img className='h-60 w-full object-contain group-hover:scale-105 transition-transform duration-200 ease-in-out'
                src={urlFor(post.mainImage).url().toString()}
              />
              <div className='flex justify-between p-5'>
                <div>
                  <p className='text-lg font-bold'>{post.title}</p>
                  <p className='text-xs'>
                    {post.description} by {post.author.name}
                  </p>
                </div>

                  <img className='h-12 w-12 rounded-full' src={urlFor(post.author.image).url().toString()} />

              </div>
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default Posts
