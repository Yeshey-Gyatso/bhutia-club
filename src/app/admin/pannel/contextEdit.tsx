"use client"
    import { useEffect, useState } from 'react';
    import axios from 'axios';
    export default function AboutPannel() {
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
   
