import React from 'react'
import logoT from '../public/logoT.png';
import Image from 'next/image'
import Link from 'next/link';
import Navbar from '../components/navbar';
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../recoil/atoms';
import { Heading1 } from 'lucide-react';
const About = () => {
  const language=useRecoilValue(languageAtom);
  return (
    
    <div className=' h-screen w-screen flex justify-center '>
        <Navbar/>
         <div className=' flex flex-row justify-center items-center pt-24 '>
        <div className='p-2'>

        <Image 
              src={logoT} 
              alt='pic of logo'
              width={400}
              height={400}
               />     
        </div>
       
       
        <title>
          About Us - Bhutia Khayrab Yargay tshogpo
          </title>
      

      <main className="bg-gray-100 p-8">
        <section className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-lg font-semibold mb-4">
            {
              language?(<h1>About Us in bhutia</h1>):(<h1>About Us</h1>)
            }
            </h1>
          <p className="text-gray-700 text-sm">
            {
              language ? (
                  <p>in bhutia</p>
              ):(
                  <p> Welcome to Bhutia Khayrab Yargay Tshogpo. We are a dedicated team of professionals passionate about delivering high-quality products and services to our customers.</p>
              )
            }
           
          
          </p>

          <h2 className="text-lg font-semibold mt-8 mb-4">
            {
              language?(<h2>About Denjongke in bhutia</h2>):(<h2>About Denjongke</h2>)
            }
            
            
            </h2>
          <p className="text-gray-700 text-sm">
            {
              language?(<p>bhutia-  Denjongke is a Tibetic (Tournadre 2008: 283) language, spoken in the formerly
              independent kingdom of Sikkim, which is now a state of India. One of the most
              closely related languages within the Tibetic family is Dzongkha, the official
              language of Bhutan. The Census of India 2001 lists 41,825 speakers for
              Denjongke, whereas a few Denjongke language teachers have given estimates of
              some 25–30,000 speakers at present. The exact number of speakers is difficult to
              determine because many young ethnic Denjongpas either do not speak the
              language or have a very limited knowledge of it. Moreover, many Lepchas
              living close to Denjongpas are reported to speak Denjongke. Denjongke
              grammar has been described by Sandberg (1888, 1895). Walsh (1905), Grierson
              ([1909] 1967) and Shafer (1974) also provide some lexical data and historicalcomparative
              observations on Denjongke phonology. Sandberg (1895: 44-45)
              gives a brief list of sentences illustrating Denjongke copulas (which he calls
              “substantive verbs”) but his description is not very detailed. References to
              Sandberg (1895), when relevant, are given later in this article.
              The most common endonym of the language is Lhoke2 ‘southern language’,
              while Denjongke3 is a pan-Tibetan term better understood by other Tibetanrelated
              communities. In India, the language is widely known as (Sikkimese)
              Bhutia, and in the Ethnologue (Lewis et al. 2013) as Sikkimese. The dialects of
              the Northern villages of Lachen and Lachung are called by the names of these
              villages.</p>)
              :(<p>Denjongke is a Tibetic (Tournadre 2008: 283) language, spoken in the formerly
              independent kingdom of Sikkim, which is now a state of India. One of the most
              closely related languages within the Tibetic family is Dzongkha, the official
              language of Bhutan. The Census of India 2001 lists 41,825 speakers for
              Denjongke, whereas a few Denjongke language teachers have given estimates of
              some 25–30,000 speakers at present. The exact number of speakers is difficult to
              determine because many young ethnic Denjongpas either do not speak the
              language or have a very limited knowledge of it. Moreover, many Lepchas
              living close to Denjongpas are reported to speak Denjongke. Denjongke
              grammar has been described by Sandberg (1888, 1895). Walsh (1905), Grierson
              ([1909] 1967) and Shafer (1974) also provide some lexical data and historicalcomparative
              observations on Denjongke phonology. Sandberg (1895: 44-45)
              gives a brief list of sentences illustrating Denjongke copulas (which he calls
              “substantive verbs”) but his description is not very detailed. References to
              Sandberg (1895), when relevant, are given later in this article.
              The most common endonym of the language is Lhoke2 ‘southern language’,
              while Denjongke3 is a pan-Tibetan term better understood by other Tibetanrelated
              communities. In India, the language is widely known as (Sikkimese)
              Bhutia, and in the Ethnologue (Lewis et al. 2013) as Sikkimese. The dialects of
              the Northern villages of Lachen and Lachung are called by the names of these
              villages.</p>)
            }
                      
          </p>
          <div className=' flex justify-center items-center'>
          <Link className='text-black bg-transparent px-6 py-3 
                 my-8 mx-auto flex items-center rounded-md border
                  border-black hover:scale-110 duration-300'
                  href={"/contactUs"}
                  >
                    {
                      
                    }
                 Contact Us
                </Link>  
          </div>
                 
          <div className='flex justify-center items-center'>
        
        </div>
        </section>
        
      </main>
      
      </div>
      
    </div>
   
  )
}

export default About