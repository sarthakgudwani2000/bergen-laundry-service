import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYelp } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import { Phone, Mail, MapPin } from "lucide-react";
import { BRAND, LOCATIONS, SOCIAL, SCHEDULE_ORDER_URL } from "@/lib/brand";

function SocialRow({ label, links }) {
  return (
    <div className="mt-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        <motion.a
          href={links.facebook}
          className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-slate-700/90 bg-slate-900/40 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          aria-label={`${label} on Facebook`}
          whileHover={{ scale: 1.08, y: -1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaFacebook className="h-[1.125rem] w-[1.125rem]" aria-hidden />
        </motion.a>
        <motion.a
          href={links.instagram}
          className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-slate-700/90 bg-slate-900/40 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          aria-label={`${label} on Instagram`}
          whileHover={{ scale: 1.08, y: -1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaInstagram className="h-[1.125rem] w-[1.125rem]" aria-hidden />
        </motion.a>
        <motion.a
          href={links.yelp}
          className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-slate-700/90 bg-slate-900/40 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          aria-label={`${label} on Yelp`}
          whileHover={{ scale: 1.08, y: -1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaYelp className="h-[1.125rem] w-[1.125rem]" aria-hidden />
        </motion.a>
        <motion.a
          href={links.google}
          className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-slate-700/90 bg-slate-900/40 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          aria-label={`${label} on Google Maps`}
          whileHover={{ scale: 1.08, y: -1 }}
          whileTap={{ scale: 0.95 }}
        >
          <SiGooglemaps className="h-[1.125rem] w-[1.125rem]" aria-hidden />
        </motion.a>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-300 ring-1 ring-white/10"
      data-testid="site-footer"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_20%_0%,_rgb(37_99_235_/_0.25),_transparent_50%)]"
        aria-hidden
      />
      <div className="container-pad relative py-9 grid md:grid-cols-3 gap-7">
        <div>
          <h3 className="font-display text-white text-xl lg:text-2xl font-bold">
            {BRAND.pickup}
          </h3>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-xs">
            North Jersey&apos;s free laundry pickup &amp; delivery service. A{" "}
            <strong className="text-slate-300">{BRAND.parent}</strong> brand.
            Orders are washed, dried, and folded at{" "}
            <strong className="text-slate-300">{BRAND.store}</strong>,{" "}
            {LOCATIONS.newBridge.full}.
          </p>
          <SocialRow label={SOCIAL.bergen.label} links={SOCIAL.bergen} />
        </div>

        <div>
          <h4 className="font-display text-white font-semibold mb-3 lg:text-lg">
            Pickup service
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={SCHEDULE_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Schedule a pickup
              </a>
            </li>
            <li>
              <a href={`tel:${BRAND.phoneBergen}`} className="hover:text-white">
                Call {BRAND.phoneBergen}
              </a>
            </li>
            <li>
              <Link to="/#special-items" className="hover:text-white">
                Special items
              </Link>
            </li>
            <li>
              <Link to="/#terms" className="hover:text-white">
                Terms of service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white font-semibold mb-3 lg:text-lg">
            Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-blue-400 shrink-0" />
              <span>
                <a href={`tel:${BRAND.phoneBergen}`} className="hover:text-white">
                  {BRAND.phoneBergen}
                </a>
                <span className="block text-xs text-slate-500">
                  Pickup &amp; delivery
                </span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-blue-400 shrink-0" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-white">
                {BRAND.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-blue-400 shrink-0" />
              <span>{LOCATIONS.newBridge.full}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container-pad py-5 flex flex-col gap-3 text-xs text-slate-500">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} {BRAND.pickup}. A {BRAND.parent} brand.
            All rights reserved.
          </p>
          <p className="text-center md:text-left">
            <Link to="/" className="hover:text-slate-300">
              {BRAND.pickup}
            </Link>
            {" | "}
            <a
              href={SCHEDULE_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300"
            >
              Schedule a pickup
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
