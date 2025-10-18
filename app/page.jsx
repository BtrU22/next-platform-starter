import Link from 'next/link';
import { Card } from 'components/card';

export default function Page() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      {/* HERO */}
      <section className="text-center">
        <h1 className="mb-4 text-4xl font-bold">New Lawn & Landscape</h1>
        <p className="mx-auto mb-6 max-w-2xl text-lg">
          Professional lawn installs, repairs, and maintenance—backed by 40+ years of soil and turf expertise.
          We handle sod, seeding, dethatching, verticutting, power raking, mowing, trimming, fertilization,
          weed control, and more. Reliable, responsive, and built to last.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/contact" className="btn btn-lg sm:min-w-48">
            Get a Free Estimate
          </Link>
          <a
            href="#services"
            className="btn btn-outline btn-lg sm:min-w-48"
          >
            See Services
          </a>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section id="services" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="New Lawns">
          <ul className="list-disc pl-5">
            <li>Sod installation & soil prep</li>
            <li>Seeding & overseeding</li>
            <li>Lawn repairs & full replacements</li>
          </ul>
        </Card>
        <Card title="Care & Restoration">
          <ul className="list-disc pl-5">
            <li>Dethatching & verticutting</li>
            <li>Power raking</li>
            <li>Fertilization & weed control</li>
          </ul>
        </Card>
        <Card title="Landscaping">
          <ul className="list-disc pl-5">
            <li>Tree & shrub planting</li>
            <li>Beds, mulch, rock</li>
            <li>Walkways, pavers, retaining walls</li>
          </ul>
        </Card>
        <Card title="Maintenance">
          <ul className="list-disc pl-5">
            <li>Weekly mowing & edging</li>
            <li>Shrub & tree trimming</li>
            <li>Leaf cleanup</li>
          </ul>
        </Card>
        <Card title="Soil & Analysis">
          <ul className="list-disc pl-5">
            <li>Soil testing & treatment</li>
            <li>Custom seed blends</li>
            <li>Tailored turf recommendations</li>
          </ul>
        </Card>
        <Card title="Seasonal">
          <ul className="list-disc pl-5">
            <li>Pre-season tune-ups</li>
            <li>Fall cleanups</li>
            <li>Snow removal</li>
          </ul>
        </Card>
      </section>

      {/* GUARANTEE / CTA */}
      <section className="text-center">
        <h2 className="mb-3 text-2xl font-semibold">Our Promise</h2>
        <p className="mx-auto mb-6 max-w-2xl">
          If weeds have taken over, we can reset your yard and install a fresh, healthy lawn the right way.
          Every project is completed with professionalism, quality materials, and a satisfaction guarantee.
        </p>
        <Link href="/contact" className="btn btn-lg sm:min-w-64">
          Request Your Free Estimate
        </Link>
      </section>
    </div>
  );
}
