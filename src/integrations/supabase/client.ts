// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://udvenybxiyoejfnbxywq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkdmVueWJ4aXlvZWpmbmJ4eXdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NjExMzQsImV4cCI6MjA1NDQzNzEzNH0.m2gjteBb9q2UaRa_8dAe2ODrC87SKh6yWlG_1ifDwzE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);