import React from 'react';
import './MeditationResources.scss';

const MeditationResources = () => {
  return (
    <div className="meditation-resources">
      <h1>Meditation Resources</h1>
      <h2>Why should I meditate?</h2>
      <p>Meditation helps you become more aware of your physical and emotional pain, allowing you to address it with greater clarity and compassion.
      Regular meditation practice can significantly reduce stress levels, helping you feel calmer and more relaxed in daily life.
      By enhancing mindfulness and empathy, meditation improves your relationships and communication with others, fostering deeper connections.
      Meditation trains your mind to concentrate better, enhancing your ability to stay focused and productive. </p>
      
      <h2>Meditation Guidance:</h2>
      <div className='guide'>
      <h3> Take a seat </h3>
      <p>Find place to sit that feels calm and quiet to you.</p>

      <h3>Set a time limit</h3>
      <p>If you’re just beginning, it can help to choose a short time, such as five or 10 minutes.</p>

      <h3> Notice your body</h3>
      <p>You can sit in a chair with your feet on the floor, you can sit loosely cross-legged, you can kneel—all are fine. Just make sure you are stable and in a position you can stay in for a while.</p>

      <h3> Feel your breath</h3>
      <p>Follow the sensation of your breath as it goes in and as it goes out.</p>

      <h3> Notice when your mind has wandered</h3>
      <p>Inevitably, your attention will leave the breath and wander to other places. When you get around to noticing that your mind has wandered—in a few seconds, a minute, five minutes—simply return your attention to the breath.</p>

      <h3> Be kind to your wandering mind</h3>
      <p>Don’t judge yourself or obsess over the content of the thoughts you find yourself lost in. Just come back.</p>

      <h3> Close with kindness</h3>
      <p>When you’re ready, gently lift your gaze (if your eyes are closed, open them). Take a moment and notice any sounds in the environment. Notice how your body feels right now. Notice your thoughts and emotions.</p>
      </div>
      <hr></hr>
      <p>That’s it! That’s the practice. You focus your attention, your mind wanders, you bring it back, and you try to do it as kindly as possible (as many times as you need to).</p>

      <p>For more information, please check <a href="https://www.mindful.org/" target="_blank" rel="noreferrer">mindful</a>.</p>
    </div>
  );
};

export default MeditationResources;
