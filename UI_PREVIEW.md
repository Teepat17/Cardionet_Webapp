# UI Preview - Modern Heart Disease Risk Assessment

## Design Overview

The application features a modern, interactive interface with the following key design elements:

### Color Scheme
- **Primary Background**: Deep dark blue gradient (`from-slate-900 via-blue-900 to-slate-900`)
- **Card Background**: Semi-transparent slate (`bg-slate-800/50`) with backdrop blur
- **Accent Colors**: Blue gradients for buttons, green for success states
- **Text Colors**: White for headings, blue-200 for descriptions, slate-300 for hints

### Interactive Elements

#### Progress Bar
```
Question 1 of 13    8%
[████████████████████████████████████████████████████████████████]
```

#### Question Cards
- **Glassmorphism Effect**: Semi-transparent background with blur
- **Rounded Corners**: 2xl border radius for modern look
- **Shadow Effects**: Subtle shadows for depth
- **Border**: Subtle slate border for definition

#### Multiple Choice Buttons
- **Selected State**: Blue gradient background with white text
- **Hover State**: Lighter slate background
- **Default State**: Dark slate with light text
- **Smooth Transitions**: 200ms duration for all interactions

#### Navigation
- **Previous Button**: Dark slate with hover effects
- **Next Button**: Blue gradient with cyan accent
- **Submit Button**: Green gradient for final action

### Animation Features

#### Page Load
- **Fade-in Effect**: 700ms duration with translate-y animation
- **Staggered Elements**: Progressive reveal of UI components

#### Question Transitions
- **Smooth Progress**: Progress bar animates with 500ms duration
- **Button States**: Hover and focus states with smooth transitions
- **Loading States**: Animated text changes during API calls

### Responsive Design

#### Desktop (1024px+)
- **Max Width**: 4xl container (896px)
- **Padding**: 6 units (24px)
- **Card Layout**: Full-width question cards
- **Button Layout**: Side-by-side navigation

#### Mobile (< 768px)
- **Container**: Full width with reduced padding
- **Typography**: Smaller font sizes for better fit
- **Buttons**: Stacked layout for better touch targets
- **Progress**: Compact progress indicator

### Accessibility Features

#### Visual Hierarchy
- **Headings**: Clear typography scale (4xl for main title, 2xl for questions)
- **Contrast**: High contrast ratios for readability
- **Spacing**: Consistent spacing using Tailwind's spacing scale

#### Interactive Elements
- **Focus States**: Blue ring focus indicators
- **Disabled States**: Reduced opacity for disabled buttons
- **Error States**: Red text and borders for validation errors

#### Screen Reader Support
- **Semantic HTML**: Proper heading structure
- **ARIA Labels**: Descriptive labels for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility

### Result Display

#### Success State
- **Background**: Green gradient with transparency
- **Border**: Green border for visual separation
- **Risk Level**: Color-coded badges (red for risk, green for safe)
- **Percentage**: Monospace font for precise number display

#### Error State
- **Background**: Red gradient with transparency
- **Text**: Clear error messages with helpful context
- **Icon**: Warning emoji for visual emphasis

### Performance Optimizations

#### CSS Transitions
- **Hardware Acceleration**: Transform and opacity animations
- **Efficient Properties**: Using GPU-accelerated properties
- **Smooth Curves**: Natural easing functions

#### State Management
- **Minimal Re-renders**: Efficient React state updates
- **Optimized Validation**: Real-time validation without blocking
- **Lazy Loading**: Progressive enhancement approach

### Browser Support

#### Modern Browsers
- **Chrome/Edge**: Full support for all features
- **Firefox**: Complete compatibility
- **Safari**: Full feature support
- **Mobile Browsers**: Optimized for iOS Safari and Chrome Mobile

#### Fallbacks
- **CSS Grid**: Graceful degradation for older browsers
- **Backdrop Filter**: Fallback for browsers without support
- **Gradients**: Solid color fallbacks where needed

## Development Notes

### Tailwind Classes Used
- **Backgrounds**: `bg-gradient-to-br`, `bg-slate-800/50`, `backdrop-blur-sm`
- **Borders**: `border-slate-700/50`, `rounded-2xl`
- **Shadows**: `shadow-2xl`, `shadow-lg`
- **Transitions**: `transition-all duration-200`, `transition-all duration-500`
- **Gradients**: `from-blue-600 to-cyan-600`, `from-green-600 to-emerald-600`

### Custom Animations
- **Fade In**: `opacity-0` to `opacity-100` with `translate-y-8` to `translate-y-0`
- **Progress Bar**: Dynamic width calculation with smooth transitions
- **Button States**: Hover and focus effects with color transitions

### Responsive Breakpoints
- **Mobile**: `< 768px` - Stacked layout, smaller text
- **Tablet**: `768px - 1024px` - Balanced layout
- **Desktop**: `> 1024px` - Full layout with optimal spacing
