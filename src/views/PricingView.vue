<script lang="ts" setup>
import CloudImg from '@/assets/cloud.png';
import SealCheck from '@/assets/SealCheck.png';
import AppStoreButtons from '@/components/AppStoreButtons.vue';
import BottomSection from '@/components/BottomSection.vue';
import AppButton from '@/components/AppButton.vue';

const ImageLang = [
  {
    id: 1,
    class: "absolute top-5 right-1 sm:right-22 w-24 sm:w-44 pointer-events-none select-none z-0",
    image: CloudImg,
    alt: "cloud image"
  },
  {
    id: 2,
    class: "absolute top-30 sm:bottom-12 left-3 sm:left-20 w-24 sm:w-44 pointer-events-none select-none z-0",
    image: CloudImg,
    alt: "cloud image"
  },
]

</script>
<template>
    <div class="bg-app-green w-full h-130 relative">

        <img
            v-for="img in ImageLang"
            :key="img.id"
            :src="img.image"
            alt="language"
            aria-hidden="true"
            :class="[img.class, 'z-1']"
        />

                <div class=" font-lucky relative flex flex-col justify-center mr-30 z-10">
                    <!-- card and header text goes here -->
                    <h1 class="mt-15 ml-10 text-center text-5xl text-white">CHOOSe THe PAth THat FIts<br>
                        <span class="ml-10">
                        <span class="text-[#FFD549]">YOU</span> OR YOUR <span class="text-[#FFD549]">FAmily</span>.
                        </span>
                    </h1>
                    <!-- Cards -->
                    <div class="mt-4 flex flex-col md:flex-row items-center  gap-6">
                        <!-- Card 1 -->
                        <div class="ml-10 mt-2 bg-white  text-black font-lucky w-[330px] h-[460px] rounded-[34.52px] border-[2.87px]">
                            <div class="ml-7 mt-7 justify-center items-center">
                                <p class="text-[32px]">
                                    £0
                                </p>
                                <p class="font-sans font-bold text-[24px] mt-4">
                                    Adult Explorer
                                </p>
                                
                                
                                <p class="font-sans text-[12px] text-[#575757]">
                                    A simple entry point for adults who want to<br>
                                    begin learning one language and understand<br>
                                    the product before committing further.
                                </p>
                            </div>
                            <div class=" mt-7 ml-5 flex  w-[348px] h-auto gap-[15px]">
                                <img
                                    :src="SealCheck"
                                    alt="seal check"
                                    class="w-[24px] h-[24px]"
                                    
                                />  
                                <p class="font-sans text-[18px] ">
                                    Start basic conversations
                                </p>    
                            </div>
                            <div class=" mt-3 ml-5 flex  w-[348px] h-auto gap-[15px]">
                                <img
                                    :src="SealCheck"
                                    alt="seal check"
                                    class="w-[24px] h-[24px]"    
                                />  
                                <p class="font-sans text-[18px] ">
                                    Beginner lessons & modules
                                </p>    
                            </div>
                            <div class=" mt-3 ml-5 flex  w-[348px] h-auto gap-[15px]">
                                <img
                                    :src="SealCheck"
                                    alt="seal check"
                                    class="w-[24px] h-[24px]"      
                                />  
                                <p class="font-sans text-[18px] ">
                                    Limited practice
                                </p>
                            </div>
                            <div class="mt-7 ml-4 font-sans w-100">
                                <AppButton>
                                    Start Learning
                                </AppButton>  
                            </div>  
                            
                        </div>
                         <!-- Card 2 -->
                        <div class="ml-20  bg-[#FFD549] text-black font-lucky w-[360px] h-[550px] rounded-[34.52px] border-[2.87px]">
                            <div class="ml-7 mt-10">
                                <p class="text-[32px]">
                                    £15.99 /Month
                                </p>
                                <p class="font-sans font-bold text-[24px] mt-4">
                                    Family Plan
                                </p>
                                
                                
                                <p class="font-sans text-[12px] text-[#575757]">
                                    A simple entry point for adults who want to<br>
                                    begin learning one language and understand<br>
                                    the product before committing further.
                                </p>
                            </div>
                            <div class=" mt-7 ml-5 flex  w-[348px] h-auto gap-[15px]">
                                <img
                                    :src="SealCheck"
                                    alt="seal check"
                                    class="w-[24px] h-[24px]"
                                    
                                />  
                                <p class="font-sans text-[18px] ">
                                    Shared family learning structure
                                </p>    
                            </div>
                            <div class=" mt-3 ml-5 flex  w-[348px] h-auto gap-[15px]">
                                <img
                                    :src="SealCheck"
                                    alt="seal check"
                                    class="w-[24px] h-[24px]"    
                                />  
                                <p class="font-sans text-[18px] ">
                                    Parent visibility into activity <br>
                                    and progress
                                </p>    
                            </div>
                            <div class=" mt-3 ml-5 flex  w-[348px] h-auto gap-[15px]">
                                <img
                                    :src="SealCheck"
                                    alt="seal check"
                                    class="w-[24px] h-[24px]"      
                                />  
                                <p class="font-sans text-[18px] ">
                                    Designed for households learning across generations
                                </p>    
                            </div>
                             <div class="mt-7 ml-8 font-sans w-100">
                                <AppButton>
                                    Get Started
                                </AppButton>  
                            </div>  
                        </div>
                         <!-- Card 3 -->
                        <div class="ml-16  bg-white text-black font-lucky w-[330px] h-[450px] rounded-[34.52px] border-[2.87px]">
                            <div class="ml-6 mt-10">
                                <p class="text-[26px]">
                                    £7.99 per user/month
                                </p>
                                <p class="font-sans font-bold text-[24px] mt-4">
                                    Family Plan
                                </p>
                                
                                
                                <p class="font-sans text-[12px] text-[#575757]">
                                    A simple entry point for adults who want to<br>
                                    begin learning one language and understand<br>
                                    the product before committing further.
                                </p>
                            </div>
                            <div class=" mt-7 ml-5 flex  w-[348px] h-auto gap-[15px]">
                                <img
                                    :src="SealCheck"
                                    alt="seal check"
                                    class="w-[24px] h-[24px]"
                                    
                                />  
                                <p class="font-sans text-[18px] ">
                                    Start basic conversations
                                </p>    
                            </div>
                            <div class=" mt-3 ml-5 flex  w-[348px] h-auto gap-[15px]">
                                <img
                                    :src="SealCheck"
                                    alt="seal check"
                                    class="w-[24px] h-[24px]"    
                                />  
                                <p class="font-sans text-[18px] ">
                                    Beginner lessons & modules
                                </p>    
                            </div>
                            <div class=" mt-3 ml-5 flex  w-[348px] h-auto gap-[15px]">
                                <img
                                    :src="SealCheck"
                                    alt="seal check"
                                    class="w-[24px] h-[24px]"      
                                />  
                                <p class="font-sans text-[18px] ">
                                    Limited practice
                                </p> 
                                </div>
                                 <div class="mt-7 ml-6 font-sans w-100">
                                <AppButton>
                                    Get Started
                                </AppButton>  
                            </div>     
                            
                        </div>
                    </div>
                </div>
    </div>
    <div>
        <div class="mt-70 ml-10 mb-20 justify-center items-center  bg-black w-[1250px] h-[500px] top-[1238px] left-[63px] rounded-[40px]" >
            <div class="flex flex-col items-center w-fixed-[500px] h-[200px] top-[120px] left-[350px] gap-[17px] ">
                <BottomSection>
                <span class="font-lucky text-[24px] sm:text-[55px] text-white text-center sm:leading-16 leading-6">
                    Your first<br class="sm:block hidden"/> hello is free.
                </span>
                <span class="text-white text-[14px] sm:text-[20px] text-center mb-10">
                    Pick your language, say your first hello, and watch<br class="sm:block hidden"/> what it does to someone's face.
                </span>
                
                <div class="-mt-8 sm:mt-0 flex w-full z-9999">
                <AppStoreButtons />
                </div>
            </BottomSection>
            </div>
            </div>
                
                    
                   
            
    
    </div>
</template>