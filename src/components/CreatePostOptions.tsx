'use client';

import { forwardRef, useRef } from 'react';
import { ButtonNaked } from './ui/ButtonNaked';
import SvgImage from '@/svg_components/Image';

export const CreatePostOptions = forwardRef<
  HTMLInputElement,
  {
    handleVisualMediaChange: React.ChangeEventHandler<HTMLInputElement>;
  }
>(function CreatePostOptions({ handleVisualMediaChange }, forwardedRef) {
  const localRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <div className="flex flex-row justify-center gap-6 px-4 pb-5 sm:justify-start">
        <ButtonNaked
          aria-label="Upload an image or video"
          className="flex gap-4"
          onPress={() => localRef.current?.click()}
        >
          <SvgImage className="h-6 w-6 text-muted-foreground" />
          <p className="text-base font-semibold text-muted-foreground group-hover:text-muted-foreground/80">
            Image / Video
          </p>
        </ButtonNaked>
        <input
          ref={(node) => {
            // https://stackoverflow.com/a/62238917/8434369
            localRef.current = node;
            if (typeof forwardedRef === 'function') {
              forwardedRef(node);
            } else if (forwardedRef) forwardedRef.current = node;
          }}
          type="file"
          className="hidden"
          name="visualMedia"
          onChange={handleVisualMediaChange}
          accept="video/*,.jpg,.jpeg,.png"
          multiple
        />
      </div>
      <div className="flex flex-row gap-4 mb-5">
        <button
          className="group flex bg-purple-900 px-3 rounded-xl mt-4 cursor-pointer flex-row items-center gap-4"
        >

          <p className="text-base text-white  text-muted-foreground group-hover:text-muted-foreground/80">
            #News
          </p>
        </button>
        <button
          className="group flex bg-purple-900 px-3 rounded-xl mt-4 cursor-pointer flex-row items-center gap-4"
        >

          <p className="text-base text-white  text-muted-foreground group-hover:text-muted-foreground/80">
            #Music
          </p>
        </button>
        <button
          className="group flex bg-purple-900 px-3 rounded-xl mt-4 cursor-pointer flex-row items-center gap-4"
        >

          <p className="text-base text-white  text-muted-foreground group-hover:text-muted-foreground/80">
            #Podcast
          </p>
        </button>
        <button
          className="group flex bg-purple-900 px-3 rounded-xl mt-4 cursor-pointer flex-row items-center gap-4"
        >

          <p className="text-base text-white  text-muted-foreground group-hover:text-muted-foreground/80">
            #Trending
          </p>
        </button>


      </div>
    </>
  );
});
