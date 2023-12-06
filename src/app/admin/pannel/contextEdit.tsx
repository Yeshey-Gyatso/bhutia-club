"use client"
    import { useEffect, useState } from 'react';

    export default function Home() {
      const [about, setAbout] = useState({ title: '', description: '' });

      useEffect(() => {
        async function fetchAbout() {
          const response = await fetch('/api/admin/contents');
          const about = await response.json();
          setAbout(about);
        }

        fetchAbout();
      }, []);

      return (
        <div>
          <h1>{about.title}</h1>
          <p>{about.description}</p>
        </div>
      );
    }
   
