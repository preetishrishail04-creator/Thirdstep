"use client";
import {
  TopBar,
  ContextHeader,
  SecondaryPanel,
  ProofFooter,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  TextArea,
  StatusBadge,
  EmptyState,
  ErrorState,
} from "./components/design-system";

/**
 * Design System Demo Page
 * 
 * Global Layout Structure:
 * [Top Bar] → [Context Header] → [Primary Workspace (70%)] + [Secondary Panel (30%)] → [Proof Footer]
 */

export default function DesignSystemDemo() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F3]">
      {/* Top Bar */}
      <TopBar currentStep={2} totalSteps={5} status="in-progress" />

      {/* Main Content */}
      <main className="flex-1 px-24 py-40">
        <div className="max-w-[1200px] mx-auto">
          {/* Context Header */}
          <ContextHeader
            headline="Design System Foundation"
            subtext="A calm, intentional interface for tracking job applications. Built with coherence and confidence."
          />

          {/* Workspace Layout: Primary (70%) + Secondary (30%) */}
          <div className="flex flex-col lg:flex-row gap-24">
            {/* Primary Workspace - 70% */}
            <div className="w-full lg:w-[70%] space-y-24">
              {/* Component Showcase Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Buttons</CardTitle>
                  <CardDescription>
                    Primary actions use solid deep red. Secondary actions use outlined style.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-16">
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="primary" disabled>
                      Disabled
                    </Button>
                    <Button variant="secondary" size="small">
                      Small Button
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Input Showcase */}
              <Card>
                <CardHeader>
                  <CardTitle>Form Inputs</CardTitle>
                  <CardDescription>
                    Clean borders with clear focus states. Error states use the accent color.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-24">
                  <Input
                    label="Email Address"
                    placeholder="you@example.com"
                    type="email"
                  />
                  <Input
                    label="Company Name"
                    placeholder="Acme Inc."
                    error="This field is required"
                  />
                  <TextArea
                    label="Notes"
                    placeholder="Add any additional details..."
                    rows={4}
                  />
                </CardContent>
              </Card>

              {/* Status Badges */}
              <Card>
                <CardHeader>
                  <CardTitle>Status Badges</CardTitle>
                  <CardDescription>
                    Consistent status indicators using muted colors.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-16">
                    <StatusBadge status="not-started">Not Started</StatusBadge>
                    <StatusBadge status="in-progress">In Progress</StatusBadge>
                    <StatusBadge status="shipped">Shipped</StatusBadge>
                    <StatusBadge status="success">Success</StatusBadge>
                    <StatusBadge status="warning">Warning</StatusBadge>
                    <StatusBadge status="error">Error</StatusBadge>
                  </div>
                </CardContent>
              </Card>

              {/* Empty State */}
              <Card>
                <CardHeader>
                  <CardTitle>Empty State</CardTitle>
                  <CardDescription>
                    Never leave blank screens. Always guide the next action.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <EmptyState
                    title="No applications yet"
                    description="Start tracking your job search by adding your first application."
                    actionLabel="Add Application"
                    onAction={() => {}}
                  />
                </CardContent>
              </Card>

              {/* Error State */}
              <Card>
                <CardHeader>
                  <CardTitle>Error State</CardTitle>
                  <CardDescription>
                    Clearly explain what went wrong and how to fix it. Never blame the user.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ErrorState
                    message="We couldn't connect to the server."
                    solution="Check your internet connection and try again."
                    onRetry={() => {}}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Secondary Panel - 30% */}
            <SecondaryPanel
              stepNumber={2}
              explanation="Review the design system components. Each element follows the established patterns for spacing, color, and typography."
              promptText={`Design System Principles:

1. Calm, intentional, coherent
2. No gradients or glassmorphism
3. Maximum 4 colors
4. Serif headings, sans-serif body
5. Spacing: 8px, 16px, 24px, 40px, 64px
6. 150-200ms transitions
7. Clear error and empty states`}
            >
              <div className="space-y-16">
                <h5 className="font-serif text-base text-[#111111]">
                  Color Palette
                </h5>
                <div className="space-y-12">
                  <div className="flex items-center gap-12">
                    <div className="w-24 h-24 rounded-[6px] bg-[#F7F6F3] border border-[#D4D2CC]" />
                    <span className="text-sm text-[#6B6B6B]">Background</span>
                  </div>
                  <div className="flex items-center gap-12">
                    <div className="w-24 h-24 rounded-[6px] bg-[#111111]" />
                    <span className="text-sm text-[#6B6B6B]">Text</span>
                  </div>
                  <div className="flex items-center gap-12">
                    <div className="w-24 h-24 rounded-[6px] bg-[#8B0000]" />
                    <span className="text-sm text-[#6B6B6B]">Accent</span>
                  </div>
                  <div className="flex items-center gap-12">
                    <div className="w-24 h-24 rounded-[6px] bg-[#5A7D5A]" />
                    <span className="text-sm text-[#6B6B6B]">Success</span>
                  </div>
                  <div className="flex items-center gap-12">
                    <div className="w-24 h-24 rounded-[6px] bg-[#B8860B]" />
                    <span className="text-sm text-[#6B6B6B]">Warning</span>
                  </div>
                </div>
              </div>
            </SecondaryPanel>
          </div>
        </div>
      </main>

      {/* Proof Footer */}
      <ProofFooter
        items={[
          { label: "UI Built", checked: true },
          { label: "Logic Working", checked: true },
          { label: "Test Passed", checked: false },
          { label: "Deployed", checked: false },
        ]}
      />
    </div>
  );
}
