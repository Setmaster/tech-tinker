import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

const dummyContraptions = [
    {
        title: 'Spinning pancake maker',
        slug: 'spinning-pancake-maker',
        image: "contraption1.png",
        summary: 'A revolutionary kitchen gadget that spins batter into perfect pancakes.',
        instructions: `
      1. Gather all mechanical parts including the base, spinner, and dispenser.
      2. Assemble the base stand ensuring it's tightly secured.
      3. Attach the spinner to the base and ensure it rotates freely.
      4. Fix the batter dispenser on top of the spinner.
      5. Test the assembly with water to ensure proper dispensation and spinning.
      6. Once assembled, pour pancake batter into the dispenser and start making pancakes.
    `,
        creator: 'John Doe',
        views: 150,
        commentsAmount: 12
    },
    {
        title: 'Robot with full limbs',
        slug: 'robot-with-full-limbs',
        image: "robot1.png",
        summary: 'An advanced robot model featuring fully articulated limbs.',
        instructions: `
      1. Start by assembling the torso with the central processing unit.
      2. Attach the limb motors to the torso's designated slots.
      3. Connect the limbs to the motors, ensuring all joints are flexible.
      4. Wire the electronics from the CPU to each motor in the limbs.
      5. Program basic movements into the CPU to test limb articulation.
      6. Cover the mechanical parts with the robot's outer shell for protection.
    `,
        creator: 'Jane Doe',
        views: 245,
        commentsAmount: 19
    },
    {
        title: 'Egg desheller',
        slug: 'egg-desheller',
        image: "contraption2.png",
        summary: 'A simple yet innovative device to effortlessly remove eggshells.',
        instructions: `
    1. Assemble the base stand and attach the egg holder on top.
    2. Install the shell cutter around the holder with its handle.
    3. Place an egg in the holder and twist the cutter to crack and remove the shell.
    4. Adjust the cutter based on egg size for a clean shell removal.
  `,
        creator: 'Jim Beam',
        views: 175,
        commentsAmount: 8
    },
    {
        title: 'Potato holder and slicer',
        slug: 'potato-holder-and-slicer',
        image: "contraption3.png",
        summary: 'A kitchen gadget designed for easy potato holding and slicing.',
        instructions: `
    1. Assemble the main frame and attach the potato holder at the base.
    2. Insert the slicing blades into the designated slots on the frame.
    3. Secure a potato in the holder and slide the slicer downwards.
    4. Collect the perfectly sliced potatoes from the bottom tray.
  `,
        creator: 'Jill Valentine',
        views: 220,
        commentsAmount: 15
    },
    {
        title: 'Wheeled robot',
        slug: 'wheeled-robot',
        image: "robot2.png",
        summary: 'A robot designed for movement and navigation using wheels.',
        instructions: `
    1. Start by assembling the chassis and attach the wheels to each corner.
    2. Install the motors to the wheels, ensuring proper alignment for movement.
    3. Place the control unit on the chassis and connect it to the motors.
    4. Program the robot for basic forward, backward, and turning motions.
  `,
        creator: 'Jake Snake',
        views: 198,
        commentsAmount: 22
    },
    {
        title: 'Jumptron: The jumping robot',
        slug: 'jumptron-the-jumping-robot',
        image: "robot3.png",
        summary: 'A dynamic robot capable of making powered jumps.',
        instructions: `
    1. Construct the leg mechanisms with spring-loaded joints for jumping.
    2. Assemble the body and attach the legs to either side.
    3. Integrate the power system to fuel the jumps.
    4. Program the control system to manage jump strength and direction.
  `,
        creator: 'Jenny Block',
        views: 300,
        commentsAmount: 30
    },
    {
        title: 'Combat robot',
        slug: 'combat-robot',
        image: "robot4.png",
        summary: 'A robot built for competitive battles and strategic combat.',
        instructions: `
    1. Construct a reinforced chassis to withstand impacts.
    2. Install offensive and defensive mechanisms as per design specs.
    3. Incorporate sensors for navigation and opponent detection.
    4. Program tactical algorithms for autonomous combat strategies.
  `,
        creator: 'Jon Snow',
        views: 410,
        commentsAmount: 45
    },
];


export async function GET() {
    try {
        for (const contraption of dummyContraptions) {
            const result = await sql`
        INSERT INTO contraptions (slug, title, image, summary, instructions, creator, views, commentsAmount)
        VALUES (${contraption.slug}, ${contraption.title}, ${contraption.image}, 
                ${contraption.summary}, ${contraption.instructions}, 
                ${contraption.creator}, ${contraption.views}, ${contraption.commentsAmount})
      `;
        }
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
    const contraptions = await sql`SELECT * FROM contraptions`;
    return NextResponse.json({ contraptions }, { status: 200 });

}