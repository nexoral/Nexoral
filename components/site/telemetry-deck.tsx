"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Activity, Cpu, Server, ShieldCheck, Zap, RefreshCw, Layers } from "lucide-react";
import { EDGE_BALANCER_TELEMETRY } from "@/lib/projects/catalog";
import { Button } from "@/components/ui/button";

export function TelemetryDeck() {
  const [lastRefreshed, setLastRefreshed] = useState<string>("Just now");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      const now = new Date();
      setLastRefreshed(
        now.toLocaleTimeString("en-GB", { hour12: false })
      );
      setIsRefreshing(false);
    }, 400);
  };

  const metrics = [
    {
      label: "Total Users",
      value: EDGE_BALANCER_TELEMETRY.totalUsers,
      subtext: "Registered accounts · Paid users active",
      icon: ShieldCheck,
      color: "text-blue-400",
      bgGlow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]",
    },
    {
      label: "Total Load Balancers",
      value: EDGE_BALANCER_TELEMETRY.totalLoadBalancers,
      subtext: "Worker balancers deployed",
      icon: Layers,
      color: "text-indigo-400",
      bgGlow: "group-hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]",
    },
    {
      label: "Total API Gateways",
      value: EDGE_BALANCER_TELEMETRY.totalGateways,
      subtext: "Gateway workers active",
      icon: Server,
      color: "text-cyan-400",
      bgGlow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]",
    },
    {
      label: "Origins + Upstreams",
      value: EDGE_BALANCER_TELEMETRY.originsPool,
      subtext: "Combined edge pool size",
      icon: Cpu,
      color: "text-emerald-400",
      bgGlow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]",
    },
    {
      label: "Active Balancers",
      value: EDGE_BALANCER_TELEMETRY.activeBalancers,
      subtext: "Status: Live routing",
      icon: Activity,
      color: "text-emerald-400",
      badge: "active",
      bgGlow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]",
    },
    {
      label: "Active Gateways",
      value: EDGE_BALANCER_TELEMETRY.activeGateways,
      subtext: "Status: Live routing",
      icon: Zap,
      color: "text-amber-400",
      badge: "active",
      bgGlow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]",
    },
    {
      label: "AI Agent Runs",
      value: EDGE_BALANCER_TELEMETRY.aiRuns,
      subtext: "Autonomous LB generation completed",
      icon: Cpu,
      color: "text-purple-400",
      bgGlow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]",
    },
    {
      label: "Scripts Deployed",
      value: EDGE_BALANCER_TELEMETRY.scriptsDeployed,
      subtext: "Worker versions shipped to edge",
      icon: Layers,
      color: "text-sky-400",
      bgGlow: "group-hover:shadow-[0_0_20px_rgba(14,165,233,0.25)]",
    },
  ];

  return (
    <div className="glass glass-panel relative overflow-hidden rounded-2xl border border-black/[0.08] p-6 sm:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
      {/* Top Ambient Highlight */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-40 w-3/4 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 blur-3xl" />

      {/* Header bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-black/[0.06] pb-6">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              Live Production Telemetry
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-600" />
              </span>
              Production Active · Paid Users Live
            </span>
          </div>
          <h2 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            EdgeBalancer at a Glance
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Verified production telemetry across Cloudflare Worker nodes, load balancers, and global origin backends.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            className="inline-flex items-center gap-1.5 rounded-lg border border-black/[0.08] bg-slate-100/70 px-3 py-1.5 text-xs font-mono text-slate-700 transition-all hover:bg-slate-200/80 hover:text-foreground"
            title="Refresh telemetry"
          >
            <RefreshCw className={`size-3.5 ${isRefreshing ? "animate-spin text-primary" : ""}`} />
            <span>Updated: {lastRefreshed}</span>
          </button>

          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white font-medium shadow-sm"
            render={
              <a href="https://edge.nexoral.in" target="_blank" rel="noopener noreferrer" />
            }
          >
            <span>Launch Dashboard</span>
            <ArrowUpRight className="ml-1 size-3.5" />
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="mt-6 grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-4">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.label}
              className={`group relative rounded-xl border border-black/[0.08] bg-white/70 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-white ${m.bgGlow}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11.5px] font-medium text-muted-foreground">
                  {"//"} {m.label}
                </span>
                <Icon className={`size-4 ${m.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
              </div>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  {m.value}
                </span>
                {m.badge && (
                  <span className="font-mono text-[10px] rounded bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 text-emerald-700 font-semibold uppercase">
                    {m.badge}
                  </span>
                )}
              </div>

              <p className="mt-1 text-xs text-muted-foreground leading-snug">
                {m.subtext}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom Footer Callout */}
      <div className="mt-6 flex flex-col gap-3 rounded-xl border border-blue-500/20 bg-blue-50/60 p-4 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-blue-400 shrink-0" />
          <span>
            Zero server maintenance: Balancers execute at Cloudflare&apos;s 330+ edge locations with automated failover and sub-millisecond dispatch.
          </span>
        </div>
        <div className="flex items-center gap-4 shrink-0 font-mono text-[11px]">
          <Link
            href="/projects/edgebalancer"
            className="text-primary hover:underline"
          >
            Technical Architecture →
          </Link>
          <a
            href="https://edge.nexoral.in/stats"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline"
          >
            Public Stats Endpoint ↗
          </a>
        </div>
      </div>
    </div>
  );
}
