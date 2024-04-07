'use client';
import { useCreatePost } from '@/hooks/useCreatePost';
import { ProfilePhotoOwn } from './ui/ProfilePhotoOwn';
import { ButtonNaked } from './ui/ButtonNaked';
import Button from './ui/Button';
import SvgImage from '@/svg_components/Image';

export function CreatePostModalLauncher() {
  const { launchCreatePost } = useCreatePost();
  return (
    <div className="rounded-xl bg-card px-4 py-4 shadow sm:px-8 sm:py-5">
      <div className="mb-[18px] flex flex-row">
        <div className="mr-3 h-12 w-12">
          <ProfilePhotoOwn />
        </div>
        <ButtonNaked
          onPress={() => {
            launchCreatePost({ shouldOpenFileInputOnMount: false });
          }}
          className="flex flex-grow flex-col justify-center"
        >
          <p className="text-muted-foreground/70">What&apos;s on your mind?</p>
        </ButtonNaked>
      </div>
      <div className="flex flex-row gap-4">
        <ButtonNaked
          onPress={() => {
            launchCreatePost({
              shouldOpenFileInputOnMount: true,
            });
          }}
          className="group flex cursor-pointer flex-row items-center gap-4"
        >
          <SvgImage className="h-6 w-6 text-muted-foreground" />
          <p className="text-base  text-muted-foreground group-hover:text-muted-foreground/80">
            Upload Image / Video
          </p>
        </ButtonNaked>


      </div>
      <div className="flex flex-row gap-4">
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
    </div>
  );
}
