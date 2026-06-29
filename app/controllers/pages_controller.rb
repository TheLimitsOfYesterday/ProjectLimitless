class PagesController < ApplicationController
  def home
  end

  def about
  end

  def resume

    # Phase 2 (Core Requirement 3) replaces this with real TimelineEntry data.
    @timeline_entries = []
  end
end