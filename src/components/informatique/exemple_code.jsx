import React from 'react';
import AceEditor from 'react-ace';
import { motion } from "framer-motion";
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-monokai';
import { CodeIcon, HashIcon } from 'lucide-react';



export function Exemple_code() {

  // On met tout le code dans une seule constante
  const CODE_EXAMPLE = `import React from 'react';

const App = () => {
  return (
    <div className="md:w-1/2 z-10 flex justify-center md:justify-start">
      <div className="flex items-start max-w-md">
        <div className="w-14 h-14 md:w-24 md:h-24 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2 border-[#a277ff]">
          <img
            src="https://uploadthingy.s3.us-west-1.amazonaws.com/ge7jse4kSxNHoJaGDiMyGa/Screenshot_2025-08-22_015854.png"
            alt="Sarah Dayan profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-[#13111b] p-4 rounded-lg border border-[#2a2438]">
          <blockquote className="italic text-gray-300 text-sm">
            "Talented CSS is the only framework that I've seen scale on
            large teams. It's easy to customize, adapts to any design, and
            the build size is tiny."
          </blockquote>
          <div className="mt-4 text-sm text-gray-400">
            <div className="font-semibold">Sarah Dayan</div>
            <div>Staff Engineer, Algolia</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
`;

  return (
    <div className="w-full text-white font-sans ">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center relative">
        {/* Left content area with profile and quote */}
        <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
          <div className="text-[#a277ff] text-sm md:text-base font-mono ml-4 mt-8">
            <div className="mb-2"># Import statements</div>
            <div className="text-[#15e8cd]">import</div> React{' '}
            <div className="text-[#15e8cd]">from</div>{' '}
            <span className="text-[#ffca85]">'react'</span>;
            <div className="mt-4"># Function component</div>
            <div className="text-[#15e8cd]">const</div> DevTo{' '}
            <div className="text-[#15e8cd]">=</div> (){' '}
            <div className="text-[#15e8cd]">=&gt;</div> {'{'}
            <div className="ml-4">
              <div className="text-[#15e8cd]">return</div> (
            </div>
            <div className="ml-8">
              &lt;<span className="text-[#61afef]">div</span>&gt;Where
              developers connect&lt;/<span className="text-[#61afef]">div</span>
              &gt;
            </div>
            <div className="ml-4">);</div>
            {'};'}
          </div>
        </div>
        {/* Left content area with profile and quote */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}       // départ : à gauche et invisible
          whileInView={{ opacity: 1, x: 0 }}     // quand visible : devient opaque et à sa position
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}    // animation déclenchée quand 30% de la carte est visible, une seule fois"
          className="md:w-1/2 z-10 flex justify-center md:justify-start"
        >
          <div className="flex items-start max-w-md">
            <div className="w-14 h-14 md:w-24 md:h-24 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2 border-[#a277ff]">
              <img
                src="https://uploadthingy.s3.us-west-1.amazonaws.com/ge7jse4kSxNHoJaGDiMyGa/Screenshot_2025-08-22_015854.png"
                alt="Sarah Dayan profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#13111b] p-4 rounded-lg border border-[#2a2438]">
              <blockquote className="italic text-gray-300 text-sm">
                "Talented CSS is the only framework that I've seen scale on
                large teams. It's easy to customize, adapts to any design, and
                the build size is tiny."
              </blockquote>
              <div className="mt-4 text-sm text-gray-400">
                <div className="font-semibold">Sarah Dayan</div>
                <div>Staff Engineer, Algolia</div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Right column - Logo and Code Editor */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end z-10 mt-8 md:mt-0">

          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 30, transformOrigin: "top right" }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 80,
              damping: 12,
            }}
            viewport={{ once: false, amount: 0.1 }}
            className="bg-[#1a1824] p-4 rounded-lg border border-[#2a2438] w-full"
          >
              <AceEditor
                mode="jsx"
                theme="monokai"
                value={CODE_EXAMPLE}
                onChange={(newValue) => console.log(newValue)}
                name="code-editor"
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: true,
                  showLineNumbers: true,
                  tabSize: 2,
                }}
                style={{ width: '100%', height: '400px', fontSize: '12px' }}
              />
          </motion.div>
        </div>
      </div>
    </div>
  );
}