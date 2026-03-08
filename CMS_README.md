# Portfolio Content Management System (CMS)

## Overview
Your portfolio now has a fully functional Content Management System that allows you to manage all content without touching code.

## How to Use

### 📊 Admin Dashboard
Access the admin dashboard to edit all portfolio content:

**URL:** `http://localhost:3000/admin`

### 🎯 Features You Can Edit

#### 1. **Personal Information**
- Name
- Title/Bio
- Value Statement
- Budget Managed ($)
- Contact Info (Email, Phone, LinkedIn, Fiverr)
- Education Details

#### 2. **Performance Stats**
- Leads Generated
- Average ROAS
- Total Ad Budget Managed
- Waste Slashed

#### 3. **Strategic Pillars (Playbook)**
- Brand Storytelling
- Data Alchemy
- Agile Innovation
- Tech Edge

#### 4. **Case Studies**
- Healthcare Lead Gen Machine
- Fortune Fiesta Hub Gaming

#### 5. **Tech Stack**
- Marketing Tools
- Development Tools

#### 6. **Trust Signals**
- Icons & Labels for trust indicators

## File Structure

```
mahir_portfolio_v2/
├── data/
│   └── portfolio.json          # All content stored here
├── app/
│   ├── api/
│   │   └── portfolio/
│   │       └── route.js        # API endpoint for reading/writing data
│   └── admin/
│       └── page.js             # Admin dashboard UI
├── hooks/
│   └── usePortfolioData.js     # React hook for fetching data
├── components/
│   ├── Hero.jsx                # Uses data.personal
│   ├── PerformanceGrid.jsx     # Uses data.stats
│   ├── Playbook.jsx            # Uses data.pillars
│   ├── CaseStudies.jsx         # Uses data.caseStudies
│   ├── ContactFooter.jsx       # Uses data.personal & data.techStack
│   └── ... (other components)
└── data/
    └── portfolio.json          # Centralized content database
```

## How It Works

1. **Data Storage** (`data/portfolio.json`)
   - All portfolio content is stored in a single JSON file
   - Easy to backup, version control, or migrate

2. **API Routes** (`app/api/portfolio/route.js`)
   - `GET /api/portfolio` - Fetches all content
   - `POST /api/portfolio` - Updates content

3. **Custom Hook** (`hooks/usePortfolioData.js`)
   - `usePortfolioData()` - Fetches and manages portfolio data
   - Used by all components to get dynamic content

4. **Components**
   - Components import from the hook instead of having hardcoded values
   - Changes to `portfolio.json` automatically reflect on the site

5. **Admin Dashboard** (`app/admin/page.js`)
   - Tabbed interface for different content sections
   - Real-time editing with save functionality
   - User-friendly forms for each content type

## Workflow

### Editing Content
1. Go to `http://localhost:3000/admin`
2. Select the section you want to edit (Personal, Stats, Pillars, etc.)
3. Make changes in the forms
4. Click "Save Changes"
5. See updates live on `http://localhost:3000`

### Editing JSON Directly
If you prefer to edit the JSON file directly:
1. Open `data/portfolio.json`
2. Make changes
3. Save the file
4. Refresh your browser - changes load automatically

## API Endpoints

### Get All Portfolio Data
```bash
GET /api/portfolio
```

Response: Returns entire `portfolio.json` object

### Update Portfolio Data
```bash
POST /api/portfolio
Content-Type: application/json

{
  "personal": { ... },
  "stats": [ ... ],
  ...
}
```

## Examples

### Update Just Your Email
1. Fetch: `GET /api/portfolio`
2. Modify the response JSON
3. Update: `POST /api/portfolio` with the modified data

### Add a New Case Study
1. Edit `data/portfolio.json`
2. Add new object to `caseStudies` array
3. Deploy - the new case study appears automatically

## Future Enhancements

You can extend this system with:
- PostgreSQL/MongoDB for database storage
- Authentication for the admin panel
- Version history/rollback
- Scheduled publishing
- Multi-language support
- Image uploads
- Email notifications on updates

## Troubleshooting

**Admin page shows "Loading..."**
- Make sure `npm run dev` is running
- Check browser console for errors

**Changes don't save**
- Verify `data/portfolio.json` exists
- Check file permissions
- Look at server logs for API errors

**Components still showing old data**
- Hard refresh the page (Ctrl+Shift+R)
- Clear browser cache

## Support

For issues or questions, check:
- Component files in `components/` directory
- API route in `app/api/portfolio/route.js`
- Hook implementation in `hooks/usePortfolioData.js`
