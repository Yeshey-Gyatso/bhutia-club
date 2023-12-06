"use client"
import Link from 'next/link';

const BlogCard = () => {
    const blogs=[
        {

        },
        {

        },
        {}
    ]
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href="https://bhutiakhayrabyargaytshogpo.blogspot.com/" >
        <div className="hover:underline">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bhutia Khayrab Yargay Tshogpo</h5>
        </div>
      </Link>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Denjongke is a Tibetic (Tournadre 2008: 283) language, spoken in the formerly
    independent kingdom of Sikkim, which is now a state of India. One of the most
    closely related languages within the Tibetic family is Dzongkha, the official
    language of Bhutan.</p>
      <Link href="/blog/[slug]" as="/blog/noteworthy-technology-acquisitions-2021">
        <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Read more
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
