import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function GET() {
    // TRY AND CATCH
    try {
        const profile = await prisma.user.findFirst({
            select: {
                id: true,
                first_name: true,
                last_name: true,
                alias: true,
                email: true,
                phone: true,
                birth_day: true,
                gender: true,
                city: true,
                country: true,
                profile_img: true,
                job_title: true,
                about_me: true,
                slogan: true,
                about_list: true,
                socials: {
                    select: {
                        id: true,
                        label: true,
                        link: true,
                        user_id: false,
                    },
                },
                skills: {
                    select: {
                        id: true,
                        label: true,
                        user_id: false,
                    },
                },
                projects: {
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        cover_image: true,
                        categories: true,
                        github: true,
                        link: true,
                        project_skills: {
                            select: {
                                skill: {
                                    select: {
                                        id: true,
                                        label: true,
                                    }
                                },
                            }
                        },
                        user_id: false,
                        createdAt: false,
                        updatedAt: false,
                    }
                },
                createdAt: false,
                updatedAt: false,
            } 
        });
        return NextResponse.json(profile);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
    }
}