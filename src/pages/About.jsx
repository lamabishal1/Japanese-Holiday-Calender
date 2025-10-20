import React from 'react'

const About = () => {
  return (
    <>
    <div className='grid grid-cols-1 gap-4 items-center justify-items-center max-h-screen border border-black p-5 rounded-3xl m-6'>  
    <div className='text-2xl font-bold'>About</div>
    <p>The Japanese Holiday Calendar is a React web application that displays all national holidays in Japan for the year 2025. The data is fetched in real-time from the Calendarific API  , ensuring accuracy and up-to-date information.</p>
    <p>This project demonstrates my ability to work with REST APIs, React components, and state-based UI updates — common skills needed in modern frontend development.</p>
    </div>
    <div className='grid grid-cols-1 gap-4 items-center justify-items-center max-h-screen border border-black p-5 rounded-3xl m-6'>  
    <div className='text-2xl font-bold'>About</div>
<p>日本の祝日カレンダーは、React を使用して作成したウェブアプリケーションで、2025年の日本の国民の祝日をすべて表示します。データは Calendarific API からリアルタイムで取得しており、常に正確で最新の情報を提供します。</p> 
<p>このプロジェクトでは、REST API の活用、React コンポーネントの構築、そして状態管理による UI の更新など、モダンなフロントエンド開発に必要なスキルを実践的に示しています。</p>   
 </div>
    </>
  )
}

export default About;